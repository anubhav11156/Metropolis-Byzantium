export const userMnemonicContractAddress = "0xfe80032A57Bbc604C9908C6d93286BFf463C292c";

export const userMnemonicContractAbi = {
    "_format": "hh-sol-artifact-1",
    "contractName": "UserMnemonic",
    "sourceName": "contracts/userMnemonic.sol",
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "ethAddress",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "nightFallMnemonic",
                    "type": "string"
                }
            ],
            "name": "setMnemonic",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "ethAddress",
                    "type": "string"
                }
            ],
            "name": "getMnemonic",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
}