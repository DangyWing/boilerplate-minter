import { React, useEffect, useState, useContext } from "react";
import { animateScroll as scroll } from "react-scroll";
import { useLocation } from "react-router-dom";
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
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../../images/logo.svg";
import { ethers } from "ethers";
import { ConnectionContext } from "../../ConnectionContext";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const { account, setAccount } = useContext(ConnectionContext);
  let walletAddress = account;

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );

      await provider.send("eth_requestAccounts", []);

      const signer = provider.getSigner();

      let address = await signer.getAddress();
      console.log("Account: ", address);

      setAccount(address);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#ff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              <img src={logo} alt="Logo" height={"80px"} width={"80px"} />
            </NavLogo>
            <MobileIcon location={useLocation().pathname} onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  location={useLocation().pathname}
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
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
                  smooth={true}
                  duration={500}
                  spy={true}
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
                  smooth={true}
                  duration={500}
                  spy={true}
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
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Team
                </NavLinks>
              </NavItem>
              <NavBtn>
                <NavBtnConnect onClick={connectWallet}>
                  {!walletAddress ? "Connect Wallet" : walletAddress}
                </NavBtnConnect>
              </NavBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
