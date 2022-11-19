// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
// import "@openzeppelin/contracts/metatx/ERC2771Context.sol";
import "@opengsn/contracts/src/ERC2771Recipient.sol";


contract Metropolis is ERC721URIStorage, ChainlinkClient, ERC2771Recipient {

  // address trustedForwarder;

   struct NFT {
    uint256 tokenId;
    address payable seller;
    address payable owner;
    address payable artist;
    uint256 price;
    uint256 royaltyFeeInBips;
    uint256 usdValue; //  USD price of the NFT when minted
    bool sold;
  }

  mapping(uint256 => NFT) idToNFT;

  address payable platformOwner; // platform owner, me

  event nftCreated (
    uint256 indexed tokenId,
    address payable seller,
    address payable owner,
    address payable artist,
    uint256 price,
    uint256 royaltyFeeInBips,
    bool sold
  );

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;   // _tokenIds is how many no. of tokens are created
  Counters.Counter private _itemsSold;

  using Chainlink for Chainlink.Request;
  bytes32 private jobId;
  uint256 private fee;
  uint256 public maticUSDvalue;

  /*
     * MUMBAI Testnet details:
     * Link Token: 0x326C977E6efc84E512bB9C30f76E30c160eD06FB
     * Oracle: 0x40193c8518BB267228Fc409a613bDbD8eC5a97b3
     * jobId: ca98366cc7314957b8c012c72f05aeeb
  */

  constructor() ERC721("Metropolis NFT", "METRO") {
    _setTrustedForwarder(0x84a0856b038eaAd1cC7E297cF34A7e72685A8693);
    platformOwner = payable(_msgSender() );
    setChainlinkToken(0x326C977E6efc84E512bB9C30f76E30c160eD06FB);
    setChainlinkOracle(0x40193c8518BB267228Fc409a613bDbD8eC5a97b3);
    jobId = 'ca98366cc7314957b8c012c72f05aeeb';
    fee = 0.1 * 10**18;
  }

  string public versionRecipient = "2.2.0";

 function _msgSender() internal view override(Context, ERC2771Recipient)
     returns (address sender) {
     sender = ERC2771Recipient._msgSender();
 }

 function _msgData() internal view override(Context, ERC2771Recipient)
     returns (bytes calldata) {
     return ERC2771Recipient._msgData();
 }

  /*-----chainlink Any API cal to get current usd value of matic token-----*/

  function getMATICvalue() public payable returns(bytes32){
    Chainlink.Request memory req = buildChainlinkRequest(
            jobId,
            address(this),
            this.fulfill.selector
        );
    req.add(
           "get",
           "https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD,JPY,EUR&api_key={a0d31efdacea6a7974dada2b791a9a08e6b76a625c68d74328a6b6d5e6690918}"
       );

    req.add("path", "USD");

    int256 timesAmount = 10 ** 18;
    req.addInt("times", timesAmount);

    return sendChainlinkRequest(req, fee);
  }

  function fulfill( bytes32 _requestId, uint256 data) public recordChainlinkFulfillment(_requestId) {
    maticUSDvalue=data;
  }

  function getLINKtokenBalance() view public returns(uint256) {
    return address(this).balance;
  }

  /*----------------------------------------------------------------------*/

  // this function will create a token and list it in Metropolis market
  function createToken(string memory tokenURI, uint256 price, uint256 royaltyFeeInBips) public payable returns(uint){

    _tokenIds.increment();
    uint256 newItemId = _tokenIds.current();

    _mint(_msgSender() , newItemId);
    _setTokenURI(newItemId, tokenURI);

    // user defined function
    createMarketItem(newItemId, price, royaltyFeeInBips, maticUSDvalue);

    return newItemId;
  }

  // function to calculate royalty fee
  function getRoyaltyFee(uint256 _salePrice, uint256 royaltyFeeInBips) pure public returns(uint256) {
    require(_salePrice>100000000000000000,"Sale price is less than 0.1 MATIC");
    return (_salePrice/10000)*royaltyFeeInBips;
  }

  // fucntion to calculate commission fee
  function getCommissionFee(uint256 _salePrice) pure public returns(uint256){
    require(_salePrice>100000000000000000,"Sale price is less than 0.1 MATIC");
    return (_salePrice/10000)*300; // 3% commission
  }

  // will be called by createToken()
  function createMarketItem(
    uint256 tokenId,
    uint256 price,
    uint256 royaltyFeeInBips,
    uint256 usdValue
  ) private {
    require(price > 0,"Price can't be zero.");

    // idToNFT[tokenId] = NFT(
    //     tokenId,
    //     payable(msg.sender), // seller
    //     payable(address(this)),
    //     payable(msg.sender), // seller is the artist
    //     price,
    //     royaltyFeeInBips,
    //     false // flase becausek till now it is in market, not sold
    // );
    getMATICvalue();

    idToNFT[tokenId].tokenId = tokenId;
    idToNFT[tokenId].price = price;
    idToNFT[tokenId].royaltyFeeInBips = royaltyFeeInBips;
    idToNFT[tokenId].usdValue = (price*usdValue)/10**18;
    idToNFT[tokenId].seller = payable(_msgSender() );
    idToNFT[tokenId].owner = payable(address(this));
    idToNFT[tokenId].artist = payable(_msgSender() );

    // transfer nft to marketplace from seller
    _transfer(_msgSender() , address(this), tokenId);
    emit nftCreated(
        tokenId,
        payable(_msgSender()),
        payable(address(this)),
        payable(_msgSender()),
        price,
        royaltyFeeInBips,
        false
    );
  }

  // Some user is buying NFT, transfer ownership of Nft and price between parties
  function buyNft(
    uint tokenId
  ) public payable {
    uint price = idToNFT[tokenId].price;
    uint royaltyFee = idToNFT[tokenId].royaltyFeeInBips;
    address seller = idToNFT[tokenId].seller;
    address artist = idToNFT[tokenId].artist;
    require(msg.value==price,"Submitted price not equal to NFT price.");
    // when someone buy nft for the first time, change it's owner from platform to him/her
    idToNFT[tokenId].owner = payable(_msgSender() );
    idToNFT[tokenId].sold = true;
    idToNFT[tokenId].seller = payable(address(0));

    _itemsSold.increment();

    // transfer ownership of the NFT
    _transfer(address(this), _msgSender(), tokenId);

    // now transfer the NFT amount royalty if it is there and commission to the platform owner

    if(idToNFT[tokenId].seller==idToNFT[tokenId].artist){
      // means artist is the seller and it's the first sell of the NFT and artist don't charge royalty fee to himself
      // only charge the commission fetches

      uint256 commissionFee = getCommissionFee(price);
      uint256 toSeller = (msg.value)-commissionFee;

      // transfer commissionFee to the platform owner
      platformOwner.transfer(commissionFee);

      // transfer rest amount to the seller
      payable(seller).transfer(toSeller);
    }else {
      uint256 commissionFee = getCommissionFee(price);
      uint256 _royaltyFee = getRoyaltyFee(price, royaltyFee);
      uint256 toSeller = (msg.value)-(commissionFee + _royaltyFee);
      // transfer royalty fee to the artist
      payable(artist).transfer(_royaltyFee);

      // transfer commissionFee to the platform
      platformOwner.transfer(commissionFee);

      // transfer rest amount to the seller
      payable(seller).transfer(toSeller);
    }
  }

  // this function returns all the unsold NFTs
  // if sold then don't list in the market
  function fetchMarket() public view returns(NFT[] memory) {
    uint256 nftCount = _tokenIds.current();
    uint256 unsoldNftCount = _tokenIds.current() - _itemsSold.current();
    uint currentIndex = 0; // for looping

    // dynamic array of size unsoldNftCount
    NFT[] memory allItems = new NFT[](unsoldNftCount);

    for(uint i=0; i<nftCount; i++){
        if(idToNFT[i+1].owner == address(this)) {
            uint currentId = i+1;
            NFT storage currentNFT = idToNFT[currentId];
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
        if(idToNFT[i+1].owner==_msgSender()){
            nftCount++;
        }
    }

    NFT[] memory myNFTs = new NFT[](nftCount);
    for(uint i=0; i<totalNFTsCount; i++){
        if(idToNFT[i+1].owner==_msgSender()){
            uint currentId = i+1;
            NFT storage currentNFT = idToNFT[currentId];
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
        if(idToNFT[i+1].seller==_msgSender()){
            nftCount++;
        }
    }

    NFT[] memory myListings = new NFT[](nftCount);
    for(uint i=0; i<totalNFTsCount; i++){
        if(idToNFT[i+1].seller==_msgSender()){
            uint currentId = i+1;
            NFT storage currentNFT = idToNFT[currentId];
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
    require(idToNFT[tokenId].owner==_msgSender(),"You are not owner of this NFT");
    idToNFT[tokenId].owner=payable(address(this));
    idToNFT[tokenId].sold=false;
    idToNFT[tokenId].seller=payable(_msgSender());
    idToNFT[tokenId].price=price;
    _itemsSold.decrement();

    _transfer(_msgSender(), address(this), tokenId);
  }
}
