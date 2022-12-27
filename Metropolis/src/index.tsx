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
import axios from "axios";

// import { WagmiConfig, createClient, chain } from 'wagmi'
// import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { SIWEProvider, SIWEConfig } from "connectkit";
import { SiweMessage } from 'siwe';



const container = document.getElementById('root');
const root = createRoot(container);

// const client = createClient({
//   autoConnect: true,
//   provider: getDefaultProvider(),
// })


/*----------------------------------wagmi connect kit + sign with ethereum----------------------------*/

const siweConfig: SIWEConfig = {
  getNonce: async () => fetch('/api/siwe/nonce').then((res) => res.text()),
  createMessage: ({ nonce, address, chainId }) => new SiweMessage({
    version: '1',
    domain: window.location.host,
    uri: window.location.origin,
    address,
    chainId,
    nonce,
    statement: 'Sign in With Ethereum.',
  }).prepareMessage(),
  verifyMessage: async ({ message, signature }) => axios.post('', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, signature }),
  }).then((res) => res.ok)
  .catch(function (error) {
    console.log('error is : ', error);
  }),
  getSession: async () => fetch('/api/siwe/session').then((res) => res.ok ? res.json() : null),
  signOut: async () => fetch('/api/siwe/logout').then((res) => res.ok),
};

/*------------------------------------------------------------------------------------------------------*/

/*---------Wagmi configuration---------*/

const alchemyId = process.env.REACT_APP_ALCHEMY_API_KEY;


const { chains, provider, webSocketProvider } = configureChains(
  [goerli],
  [alchemyProvider({ apiKey: `${alchemyId}` }), publicProvider()],
);

const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'Byzantium',
      },
    }),
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

/*-------------------------------------*/


// const chains = [chain.mainnet, chain.polygon, chain.polygonMumbai];
// const chains = [chain.goerli];


// const client = createClient(
//   getDefaultClient({
//     appName: "Metropolis",
//     alchemyId,
//     chains,
//   }),
// );

root.render(
  <React.StrictMode>
    <WagmiConfig client={client}>
        <Provider store={store}>
          <SIWEProvider {...siweConfig}>
          <ConnectKitProvider>
              <App />
          </ConnectKitProvider>
          </SIWEProvider>
        </Provider>
    </WagmiConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
