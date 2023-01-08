// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract UserMnemonic {

    mapping( string => string) ethAddressToNightFallMnemonic;


    function setMnemonic(string memory ethAddress, string memory nightFallMnemonic) public {
        ethAddressToNightFallMnemonic[ethAddress] = nightFallMnemonic;
    }

    function getMnemonic(string memory ethAddress) public view returns(string memory){
        return ethAddressToNightFallMnemonic[ethAddress];
    }
}