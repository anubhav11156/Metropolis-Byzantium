export const userMnemonicContractAddress = "0xd3A008480eAc146e33d15B23D92793DE72c1bb75";

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