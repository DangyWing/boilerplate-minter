import { ethers } from 'ethers';
import abi from './abi.json';

async function mintNFT(mintAmount) {
  const contractAddress = '0xFE98Bd9Bb6CaE3ba0386824a3493De466eFDB4Bf';

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = provider.getSigner();

  const contract = new ethers.Contract(contractAddress, abi, provider).connect(
    signer,
  );

  const ethAmount = ethers.utils.parseEther('0.05');

  const gasEstimate = await contract.estimateGas.mintDick(mintAmount, {
    value: ethAmount,
  });

  console.log(`Gas Estimate: ${gasEstimate}`);

  const tx = await contract.mintDick(mintAmount, {
    value: ethAmount,
  });

  const txReceipt = await tx.wait();

  console.log(txReceipt);
}

export default mintNFT;
