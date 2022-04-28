import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import providerOptions from '../providerOptions';
import { useState } from 'react';

async function connectWallet() {
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [error, setError] = useState('');

  //console.log("Infura Key: " + process.env.REACT_APP_INFURA_KEY)

  const web3Modal = new Web3Modal({
    network: 'rinkeby',
    theme: 'light',
    cacheProvider: false,
    disableInjectedProvider: false,
    providerOptions,
  });

  try {
    const providerNew = await web3Modal.connect();
    const libraryNew = new ethers.providers.Web3Provider(providerNew);
    const accounts = await libraryNew.listAccounts();

    setProvider(providerNew);
    setLibrary(libraryNew);

    const network = await libraryNew.getNetwork();
    setChainId(network.chainId);

    console.log(network.chainId);

    if (accounts) setAccount(accounts[0]);
  } catch (errorNew) {
    console.log(errorNew);
    setError(errorNew);
  }
}

export default connectWallet;
