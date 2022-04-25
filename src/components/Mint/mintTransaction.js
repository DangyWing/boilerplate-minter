import { ethers } from "ethers";

async function mintNFT(mintAmount) {
  let abi = require("./abi.json");

  let contractAddress = "0xFE98Bd9Bb6CaE3ba0386824a3493De466eFDB4Bf";

  let provider = new ethers.providers.Web3Provider(window.ethereum);

  let signer = provider.getSigner();

  let contract = new ethers.Contract(contractAddress, abi, provider).connect(
    signer
  );

  let ethAmount = ethers.utils.parseEther("0.05");

  let gasEstimate = await contract.estimateGas.mintDick(mintAmount, {
    value: ethAmount,
  });

  console.log("Gas Estimate: " + gasEstimate);

  let tx = await contract.mintDick(mintAmount, {
    value: ethAmount,
  });

  const txReceipt = await tx.wait();

  console.log(txReceipt);
}

export default mintNFT;
