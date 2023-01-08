export const userMnemonicContractAddress = "0xa04436A72a8C542B32CB4f7C1bbb1BEeE3fB12aE";

export const userMnemonicContractAbi = {
    "_format": "hh-sol-artifact-1",
    "contractName": "UserMnemonic",
    "sourceName": "contracts/userMnemonic.sol",
    "abi": [
        {
            "inputs": [
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
                    "internalType": "address",
                    "name": "ethAddress",
                    "type": "address"
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