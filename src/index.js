import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { WagmiConfig, createClient, chain, configureChains } from 'wagmi'
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";
import { getDefaultProvider } from 'ethers'
import { MoralisProvider } from "react-moralis";
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

// const client = createClient({
//   autoConnect: true,
//   provider: getDefaultProvider(),
// })

// const chains = [chain.mainnet, chain.polygon, chain.polygonMumbai];
const chains = [chain.polygonMumbai];

const alchemyId = "L5y5rMAxy2S29WmJJkgz8x4iCkLzSEoV";

const client = createClient(
  getDefaultClient({
    appName: "Metropolis",
    alchemyId,
    chains,
  }),
);

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
