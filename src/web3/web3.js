import Web3 from "web3";
let web3;
const INFURA_API_KEY = "c8ad1cef16bc474cbc73cd0e2f7729a9"; // Replace with your own api key
if (
  typeof window.ethereum !== "undefined" ||
  typeof window.web3 !== "undefined"
) {
  // Web3 browser user detected. You can now use the provider.
  const provider = window["ethereum"] || window.web3.currentProvider;
  web3 = new Web3(provider);
} else {
  // server or user does not have metamask

  const provider = new Web3.providers.HttpProvider(
    `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`
  );
  web3 = new Web3(provider);
}

export default web3;
