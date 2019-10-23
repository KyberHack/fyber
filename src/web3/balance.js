import web3 from "./web3";
import minABI from "./min-abi";

export default async (walletAddress, tokenAddress) => {
  // Get ERC20 Token contract instance
  let contract = new web3.eth.Contract(minABI, tokenAddress);

  // Call balanceOf function
  let balance = await contract.methods.balanceOf(walletAddress).call();
  const decimals = await contract.methods.decimals().call();
  balance = balance / 10 ** decimals;
  return balance;
};
