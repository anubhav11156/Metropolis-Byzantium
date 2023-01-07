import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { WagmiConfig, configureChains, goerli, createClient } from 'wagmi';
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';


const container = document.getElementById('root');
const root = createRoot(container);


/*---------Wagmi configuration---------*/

const alchemyId = process.env.REACT_APP_ALCHEMY_API_KEY;


const { chains, provider, webSocketProvider } = configureChains(
  [goerli],
  [alchemyProvider({ apiKey: `${alchemyId}` }), publicProvider()],
);

const client = createClient({
  autoConnect: true,
  connectors: [
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'Byzantium',
      },
    }),
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    })
  ],
  provider,
  webSocketProvider,
})


root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
        <Provider store={store}>
          <ConnectKitProvider>
              <App />
          </ConnectKitProvider>
        </Provider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
