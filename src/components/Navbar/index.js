import {
  React, useEffect, useState, useContext, useMemo,
} from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';
import logo from '../../images/logo.svg';
import { ConnectionContext } from '../../ConnectionContext';
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
import providerOptions from '../../providerOptions';

function Navbar({ toggle }) {
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [error, setError] = useState('');
  const [scrollNav, setScrollNav] = useState(false);
  const { account, setAccount } = useContext(ConnectionContext);
  const walletAddress = account;

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
    const web3Modal = new Web3Modal({
      network: 'rinkeby',
      theme: 'light',
      cacheProvider: true,
      disableInjectedProvider: false,
      providerOptions,
    });
    try {
      const providerNew = await web3Modal.connect();
      const libraryNew = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      setProvider(providerNew);
      setLibrary(libraryNew);
      if (accounts) setAccount(accounts[0]);
    } catch (errorNew) {
      setError(errorNew);
    }
  }

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const color = useMemo(() => ({ color: '#fff' }), []);

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
                onClick={() => (!walletAddress ? connectWallet() : null)}
              >
                {!walletAddress ? 'Connect Wallet' : walletAddress}
              </NavBtnConnect>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
}

export default Navbar;
