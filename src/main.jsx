import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import { WagmiConfig, configureChains, goerli, createClient } from 'wagmi';
// import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";
// import { alchemyProvider } from 'wagmi/providers/alchemy';
// import { publicProvider } from 'wagmi/providers/public';
// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'


// const alchemyId = brR22a-IB4ZeKTD5Y8PaZ7AH8DL_nDDd;

// const { chains, provider, webSocketProvider } = configureChains(
//   [goerli],
//   [alchemyProvider({ apiKey: 'brR22a-IB4ZeKTD5Y8PaZ7AH8DL_nDDd' }), publicProvider()],
// );

// const client = createClient({
//   autoConnect: true,
//   connectors: [
//     new MetaMaskConnector({ chains }),
//     new CoinbaseWalletConnector({
//       chains,
//       options: {
//         appName: 'Byzantium',
//       },
//     }),
//     new WalletConnectConnector({
//       chains,
//       options: {
//         qrcode: true,
//       },
//     })
//   ],
//   provider,
//   webSocketProvider,
// })


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <WagmiConfig client={client}>
      <ConnectKitProvider> */}
        <App />
      {/* </ConnectKitProvider>
    </WagmiConfig> */}
  </React.StrictMode>
)
