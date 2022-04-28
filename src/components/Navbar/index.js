import { React, useEffect, useState, useContext, useMemo } from 'react';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import { animateScroll as scroll } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import logo from '../../images/logo.svg';
import { ConnectionContext } from '../../ConnectionContext';
import providerOptions from '../../providerOptions';
import {
  Nav,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavbarContainer,
  NavBtnConnect,
  NavLogo,
} from './NavbarElements';

import { truncateAddress, toHex } from '../../utils';

const web3Modal = new Web3Modal({
  network: 'rinkeby',
  theme: 'light',
  cacheProvider: true,
  disableInjectedProvider: false,
  providerOptions,
});

function Navbar({ toggle }) {
  const refreshState = () => {
    setAccount();
    setChainId(null);
  };

  const [scrollNav, setScrollNav] = useState(false);
  const { account, setAccount } = useContext(ConnectionContext);
  const [provider, setProvider] = useState();
  const [chainId, setChainId] = useState();
  const [library, setLibrary] = useState();
  const [globalError, setGlobalError] = useState('');

  useEffect(() => {
    if (chainId != 4) {
      switchNetwork();
    }
  }, [library]);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

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
        console.log('SWITCHING');
      } catch (error) {
        setGlobalError(error);
        setAccount();
      }
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const color = useMemo(() => ({ color: '#fff' }), []);

  const disconnect = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
  };

  return (
    <IconContext.Provider value={color}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src={logo} alt="Logo" height="80px" width="80px" />
          </NavLogo>
          <MobileIcon location={useLocation().pathname} onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                location={useLocation().pathname}
                to="about"
                smooth
                duration={500}
                spy
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                location={useLocation().pathname}
                to="story"
                smooth
                duration={500}
                spy
                exact="true"
                offset={-80}
              >
                Story
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                location={useLocation().pathname}
                to="roadmap"
                smooth
                duration={500}
                spy
                exact="true"
                offset={-80}
              >
                Roadmap
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                location={useLocation().pathname}
                to="team"
                smooth
                duration={500}
                spy
                exact="true"
                offset={-80}
              >
                Team
              </NavLinks>
            </NavItem>
            <NavBtn>
              <NavBtnConnect
                onClick={() => (!account ? connectWallet() : disconnect())}
                // onClick={() => (!account ? connectWallet() : null)}
              >
                {!account ? 'Connect Wallet' : truncateAddress(account)}
              </NavBtnConnect>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default Navbar;
