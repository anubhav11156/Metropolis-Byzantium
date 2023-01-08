// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract UserMnemonic {

    mapping( address => string) ethAddressToNightFallMnemonic;


    function setMnemonic(string memory nightFallMnemonic) public {
        ethAddressToNightFallMnemonic[msg.sender] = nightFallMnemonic;
    }

    function getMnemonic(address ethAddress) public view returns(string memory){
        require(ethAddress == msg.sender, 'Your are not the required user');
        return ethAddressToNightFallMnemonic[ethAddress];
    }
}