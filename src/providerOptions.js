import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
// import ethProvider from 'eth-provider';

const providerOptions = {
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: 'Boilerplate Minter',
      infuraId: process.env.REACT_APP_INFURA_KEY,
      rpc: '',
      chainId: 4,
      darkMode: false,
    },
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: process.env.REACT_APP_INFURA_KEY,
      chainId: 4,
      darkMode: false,
    },
  },
  // frame: {
  //   package: ethProvider,
  // },
};

export default providerOptions;
