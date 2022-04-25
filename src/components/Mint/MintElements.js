import styled from "styled-components";

export const MintBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 2;
  }
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  z-index: 1;
`;

export const FooterContainer = styled.footer`
  background-color: #0c0c0c;
  height: 100vh;
`;

export const Container = styled.div`
  //min-height: 692px;
  //position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  //overflow: hidden;
  background-color: #0c0c0c;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MintWrap = styled.div`
  z-index: 2;
  height: 100%;
  width: auto;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;

export const MintContent = styled.div`
  width: auto;
  background: rgba(0, 0, 0, 0.1);
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const MintH1 = styled.h1`
  margin-bottom: 10px;
  color: white;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
`;

export const Text = styled.span`
  text-align: center;
  color: #d3d3d3;
  font-size: 18px;
  padding: 10px 10px;
  max-width: 420px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MintBtn = styled.button`
  border-radius: 20px;
  background: #f6b4cd;
  white-space: nowrap;
  padding: 10px 20px;
  color: #000;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-overflow: ellipsis;
  max-width: 190px;
  overflow: hidden;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #454545;
    color: #f6b4cd;
  }
`;

export const Incrementor = styled.button`
  border-radius: 10px;
  border: none;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 10px;
  font-weight: normal;
  font-size: 30px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IncrementWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
