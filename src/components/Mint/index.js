import { React, useState } from "react";
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
} from "./MintElements";
import ScrollToTop from "../ScrollToTop";
import Video from "../../videos/video.mp4";
import { ethers } from "ethers";
import mintNFT from "./mintTransaction";
import { useContext } from "react";
import { ConnectionContext } from "../../ConnectionContext";

const Mint = () => {
  const [hover, setHover] = useState(false);
  const [mintAmount, setMintAmount] = useState(1);
  const { account, setAccount } = useContext(ConnectionContext);
  let walletAddress = account;

  const onHover = () => {
    setHover(!hover);
  };

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );

      await provider.send("eth_requestAccounts", []);

      const signer = provider.getSigner();

      let address = await signer.getAddress();

      setAccount(address);
    }
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  return (
    <>
      <ScrollToTop />
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
              <Text>{account}</Text>
              <IncrementWrap>
                <Incrementor
                  onClick={(e) => {
                    decrementMintAmount();
                  }}
                >
                  -
                </Incrementor>
                <Text>{mintAmount}</Text>

                <Incrementor
                  onClick={(e) => {
                    incrementMintAmount();
                  }}
                >
                  +
                </Incrementor>
              </IncrementWrap>
              <MintBtn
                onClick={() =>
                  !walletAddress ? connectWallet() : mintNFT(mintAmount)
                }
                onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary="true"
              >
                {!walletAddress ? "Connect Wallet" : "Mint"}
              </MintBtn>
            </MintContent>
          </MintWrap>
        </HeroContainer>
      </Container>
      <FooterContainer />
    </>
  );
};

export default Mint;
