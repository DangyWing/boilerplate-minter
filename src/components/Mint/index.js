import { React, useState, useContext, useEffect } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

import {
  MintWrap,
  Container,
  MintH1,
  MintContent,
  Text,
  MintBtn,
  VideoBg,
  MintBg,
  HeroContainer,
  FooterContainer,
  Incrementor,
  IncrementWrap,
} from './MintElements';

import Video from '../../videos/video.mp4';
import mintNFT from './mintTransaction';
import { ConnectionContext } from '../../ConnectionContext';
import providerOptions from '../../providerOptions';
import { truncateAddress, toHex } from '../../utils';

const web3Modal = new Web3Modal({
  network: 'rinkeby',
  theme: 'light',
  cacheProvider: true,
  disableInjectedProvider: false,
  providerOptions,
});

function Mint() {
  const { account, setAccount } = useContext(ConnectionContext);
  const [provider, setProvider] = useState();
  const [chainId, setChainId] = useState();
  const [library, setLibrary] = useState();
  const [globalError, setGlobalError] = useState('');
  const [mintAmount, setMintAmount] = useState(1);

  useEffect(() => {
    if (chainId != 4) {
      switchNetwork();
    }
  }, [chainId]);

  async function connectWallet() {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();

      setProvider(provider);
      setLibrary(library);
      setChainId(network.chainId);

      if (accounts) setAccount(accounts[0]);
    } catch (error) {
      setGlobalError(error);
    }
  }

  const switchNetwork = async () => {
    if (library) {
      try {
        await library.provider.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: toHex(4) }],
        });
      } catch (error) {
        setGlobalError(error);
      }
    }
  };

  function incrementMintAmount() {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  }

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  return (
    <>
      <Container>
        <HeroContainer>
          <MintBg>
            <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
          </MintBg>
          <MintWrap>
            <MintContent>
              <MintH1>.123Ξ per token!</MintH1>
              <Text>Contract: 0xXYZ</Text>
              <Text>10 / 10,000</Text>
              <Text>{truncateAddress(account)}</Text>
              <IncrementWrap>
                <Incrementor
                  onClick={() => {
                    decrementMintAmount();
                  }}
                >
                  -
                </Incrementor>
                <Text>{mintAmount}</Text>

                <Incrementor
                  onClick={() => {
                    incrementMintAmount();
                  }}
                >
                  +
                </Incrementor>
              </IncrementWrap>
              <MintBtn
                onClick={() =>
                  !account ? connectWallet() : mintNFT(mintAmount)
                }
              >
                {!account ? 'Connect Wallet' : 'Mint'}
              </MintBtn>
            </MintContent>

            <Text>{globalError ? globalError.message : null}</Text>
          </MintWrap>
        </HeroContainer>
      </Container>
      <FooterContainer />
    </>
  );
}

export default Mint;
