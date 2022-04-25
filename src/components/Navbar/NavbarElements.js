import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? "#000" : "black")};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  margin-top: -80px;
  z-index: 10;
  background-color: #0c0c0c;

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  display: ${({ location }) => (location === "/" ? "flex" : "none")};
  color: #fff;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #f6b4cd;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: ${({ location }) => (location === "/" ? "block" : "none")};
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.9rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  margin-top: -1%;
  text-decoration: none;
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnConnect = styled.div`
  border-radius: 20px;
  background: #f6b4cd;
  white-space: nowrap;
  padding: 10px 22px;
  color: #000;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  text-overflow: ellipsis;
  max-width: 170px;
  overflow: hidden;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #454545;
    color: #f6b4cd;
  }
`;
