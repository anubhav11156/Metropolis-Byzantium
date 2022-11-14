// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Metropolis is ERC721URIStorage {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;   // _tokenIds is how many no. of tokens are created
  Counters.Counter private _itemsSold;

  address payable owner; // owner is platform owner

  constructor() ERC721("Metaverse Tokens", "METT") {
    owner = payable(msg.sender);
  }

  struct NFT {
    uint256 tokenId;
    address payable seller;
    address payable owner;
    uint256 price;
    bool sold;
  }

  mapping(uinit256 => NFT) idToNFT;

  event nftCreated (
    uint256 indexed tokenId,
    address payable seller,
    address payable owner,
    uint256 price,
    bool sold
  );

  // this function will create a token and list it in the marketplace
  function createToken(string memory tokenURI) public payable returns(uint){

    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();

    _mint(msg.sender, newItemId);
    _setTokenURI(newItemId, tokenURI);

    // user defined function
    createMarketItem(newItemId, price);

    return newItemId;
  }

  // will be called by creaeToken()
  function createMarketItem(
    uint256 tokenId,
    uint256 price
  ) private {
    require(price > 0,"Price can't be zero.");

    idToNft[tokenId] = NFT(
        tokenId,
        payable(msg.sender), // seller
        payable(address(this)),
        price,
        false // flase because till now it is in market, not sold
    );

    // transfer nft to marketplace form seller
    _transfer(msg.sender, address(this), tokenId);
    emit nftCreated(
        tokenId,
        msg.sender,
        address(this),
        price,
        false
    );
  }

  // Some user is buying NFT, transfer ownership of Nft and price between parties
  function buyNft(
    uint tokenId
  ) public payable {
    uint price = idToNft[tokenId].price;
    address seller = idToNft[tokenId].seller;
    require(msg.value==price,"Submitted price not equal to NFT price.");
    // when someone buy nft for the first time, change it's owner from platform to him/her
    idToNft[tokenId].owner = payable(msg.sender);
    idToNft[tokenId].sold = true;
    idToNft[tokenId].seller = payable(address(0));

    _itemsSold.increment();

    // transfer ownership of the NFT
    _transfer(address(this), msg.sender, tokenId);
    // now transfer the NFT amount to the seller
    payable(seller).transfer(msg.value);
  }

  // this function returns all the unsold NFTs
  // if sold then don't list in the market
  function fetchMarket() public view returns(NFT[] memory) {
    uint256 nftCount = _tokenIds.current();
    uint256 unsoldNftCount = _tokenIds.current() - _itemsSold.current();
    uint currentIndex = 0; // for looping

    // dynamic array of size unsoldNftCount
    NFT[] memory allItems = new NFT[](unsoldNftCount);

    for(uint i=0; i<itemCount; i++){
        if(idToNft[i+1].owner == address(this)) {
            uint currentId = i+1;
            NFT storage currentNFT = idToNft[curentId];
            allItems[currentIndex] = currentNFT;
            currentIndex++;
        }
    }
    return allItems;
  }

  // this fucntion fetches NFTs bought by you
  function fetchMyNFTs() public view returns(NFT[] memory) {
    uint256 totalNFTsCount = _tokenIds.current();
    uint256 nftCount = 0;
    uint256 currentIndex = 0;

    // first find total no. of nfts owned by the user
    for(uint i=0; i<totalNFTsCount; i++){
        if(idToNft[i+1].owner==msg.sender){
            nftCount++;
        }
    }

    NFT[] memory myNFTS = new NFT[](nftCount);
    for(uint i=0; i<totalNFTsCount; i++){
        if(idToNft[i+1].owner==msg.sender){
            uint currentId = i+1;
            NFT storage currentNFT = idToNft[currentId];
            myNFTs[currentIndex] = currentNFT;
            currentIndex++;
        }
    }
    return myNFTs;
  }

  // this function returns NFTs created by the user
  function fetchMyListings() public view returns(NFT[] memory){
     uint256 totalNFTsCount = _tokenIds.current();
    uint256 nftCount = 0;
    uint256 currentIndex = 0;

    // first find total no. of nfts owned by the user
    for(uint i=0; i<totalNFTsCount; i++){
        if(idToNft[i+1].seller==msg.sender){
            nftCount++;
        }
    }

    NFT[] memory myListings = new NFT[](nftCount);
    for(uint i=0; i<totalNFTsCount; i++){
        if(idToNft[i+1].seller==msg.sender){
            uint currentId = i+1;
            NFT storage currentNFT = idToNft[currentId];
            myListings[currentIndex] = currentNFT;
            currentIndex++;
        }
    }
    return myListings;
  }


  // this function resell the nfts owned by the owner
  function resellNFTs(
    uint256 tokenId,
    uint256 price
  ) public payable {
    require(idToNft[tokenId].owner==msg.sender,"You are not owner of this NFT");
    idToNft[tokenId].owner=payable(address(this));
    idToNft[tokenId].sold=false;
    idToNft[tokenId].seller=payable(msg.sender);
    idToNft[tokenId].price=price;
    _itemsSold.decrement();

    _transfer(msg.sender, address(this), tokenId);
  }
}
