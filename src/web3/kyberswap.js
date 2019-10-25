import { ERC20_ABI, KYBER_NETWORK_PROXY_ABI } from "./abi";
import { KYBER_NETWORK_PROXY_ADDRESS } from "./address";
import web3 from "./web3";


const Tx = require("ethereumjs-tx").Transaction;
// const BN = require("bignumber.js");

const myContract = [
	{
		"constant": true,
		"inputs": [
			{
				"name": "srcToken",
				"type": "address"
			},
			{
				"name": "srcQty",
				"type": "uint256"
			},
			{
				"name": "destToken",
				"type": "address"
			}
		],
		"name": "getConversionRates",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "srcToken",
				"type": "address"
			},
			{
				"name": "srcQty",
				"type": "uint256"
			},
			{
				"name": "destToken",
				"type": "address"
			},
			{
				"name": "destAddress",
				"type": "address"
			}
		],
		"name": "executeSwap",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ref",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ude",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "max_am",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ume",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "kyberNetworkProxyContract",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "registry",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "sai",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "cDai",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "cEth",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ethAddr",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_kyberNetworkProxyContract",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "srcToken",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "destToken",
				"type": "address"
			}
		],
		"name": "Swap",
		"type": "event"
	}
]
// Connecting to ropsten infura node
var KYBER_NETWORK_PROXY_CONTRACT 
var SRC_TOKEN_CONTRACT 
var contract;
// Token Details
const SRC_TOKEN = "KNC";
const DST_TOKEN = "ZIL";
const SRC_TOKEN_ADDRESS = "0x4E470dc7321E84CA96FcAEDD0C8aBCebbAEB68C6";
const DST_TOKEN_ADDRESS = "0xaD78AFbbE48bA7B670fbC54c65708cbc17450167";
const SRC_DECIMALS = 18;
const DST_DECIMALS = 12;
const MAX_ALLOWANCE = "115792089237316195423570985008687907853269984665640564039457584007913129639935";

//Contract ABIs and addresses

// Kyber Network Proxy Contract Address
// const KYBER_NETWORK_PROXY_ADDRESS = "0x818e6fecd516ecc3849daf6845e3ec868087b755";
const contractAd = "0xDD957f3d779dA9cC375b3aeec323F3fCd0d088CC";

// Trade Details
const SRC_QTY = "1";
const SRC_QTY_WEI = (SRC_QTY * 10 ** SRC_DECIMALS).toString();
const GAS_LIMIT = '500000';

// User Details

var USER_ADDRESS = '0xBE4dD6Bae372CBA479176297b67D0D42447aFAE6'

// Wallet Address for Fee Sharing Program
//If none, set to 0x0000000000000000000000000000000000000000 (null address)
const REF_ADDRESS = "0x0000000000000000000000000000000000000000";
//const REF_ADDRESS = "0x0000000000000000000000000000000000000000"

// Get the contract instances


async function main() {
  // Calculate slippage rate
  let results = await getRates(SRC_TOKEN_ADDRESS, DST_TOKEN_ADDRESS, SRC_QTY_WEI);
  console.log("slipage rate", results)
  // Check KyberNetworkProxy contract allowance
  console.log('U')
  let contractAllowance = await SRC_TOKEN_CONTRACT.methods
    .allowance(USER_ADDRESS, '0xDD957f3d779dA9cC375b3aeec323F3fCd0d088CC')
    .call();
    console.log("contract allowance", contractAllowance)
    const convRates = contract.methods.getConversionRates(SRC_TOKEN_ADDRESS, 100000, DST_TOKEN_ADDRESS).call().then(
      res => console.log(res)
    );
    console.log(convRates)
  // If insufficient allowance, approve else convert KNC to ETH.
  console.log('Useraddress',USER_ADDRESS)
  if (SRC_QTY_WEI <= contractAllowance) {
    console.log(contract)
    await trade(
      SRC_TOKEN_ADDRESS,
      SRC_QTY_WEI,
      DST_TOKEN_ADDRESS,
      USER_ADDRESS, // destination address
      MAX_ALLOWANCE,
      results.slippageRate,
      REF_ADDRESS
    ).catch(error => console.log(error));
    // await contract.methods.executeSwap(
    //   SRC_TOKEN_ADDRESS,
    //   SRC_QTY_WEI,
    //   DST_TOKEN_ADDRESS,
    //   USER_ADDRESS
    // ).catch(error => console.log(error));

  } else {
    console.log('I am in approve contract')
    await approveContract(MAX_ALLOWANCE);
    await trade(
      SRC_TOKEN_ADDRESS,
      SRC_QTY_WEI,
      DST_TOKEN_ADDRESS,
      USER_ADDRESS, // destination address
      MAX_ALLOWANCE,
      results.slippageRate,
      REF_ADDRESS
    ).catch(error => console.log(error));;

    // await contract.methods.executeSwap(SRC_TOKEN_ADDRESS,
    //   SRC_QTY_WEI,
    //   DST_TOKEN_ADDRESS,
    //   "0xBE4dD6Bae372CBA479176297b67D0D42447aFAE6",
    //   0).send()
  }

  contract.events.allEvents()
  .on('data', (event) => {
    console.log(event);
  })
  .on('error', console.error);
  
}

// Function to obtain conversion rate between src token and dst token
async function getRates(SRC_TOKEN_ADDRESS,DST_TOKEN_ADDRESS,SRC_QTY_WEI) {
  return await KYBER_NETWORK_PROXY_CONTRACT.methods
    .getExpectedRate(SRC_TOKEN_ADDRESS, DST_TOKEN_ADDRESS, SRC_QTY_WEI)
    .call();
}

// Function to convert src token to dst token
async function trade(
  srcTokenAddress,
  srcQtyWei,
  dstTokenAddress,
  dstAddress,
  maxDstAmount,
  minConversionRate,
  walletId
) {
  console.log(`Converting ${SRC_TOKEN} to ${DST_TOKEN}`);
  // let txData = await contract.methods
  //   .executeSwap(
  //     srcTokenAddress,
  //     srcQtyWei,
  //     dstTokenAddress,
  //     dstAddress
  //   )
  //   .encodeABI();
  let txData = await KYBER_NETWORK_PROXY_CONTRACT.methods.trade(
      srcTokenAddress,
      srcQtyWei,
      dstTokenAddress,
      dstAddress,
      maxDstAmount,
      minConversionRate,
      walletId
    )
    .encodeABI();
  console.log("txdata", txData)
  let td = await contract.methods.executeSwap(
      srcTokenAddress,
      srcQtyWei,
      dstTokenAddress,
      dstAddress
    ).encodeABI()
    console.log("txdata", td)

  await broadcastTx(
    USER_ADDRESS,
    KYBER_NETWORK_PROXY_ADDRESS,
    txData,
    0, //Ether value to be included in the tx
    GAS_LIMIT //gasLimit
  );
}

// Auxiliary function
// Function to broadcast transactions
async function broadcastTx(from, to, txData, value, gasLimit) {
  let txCount = await web3.eth.getTransactionCount(USER_ADDRESS) + 1;
  console.log('Txcount',txCount)
  //Method 1: Use a constant
  // let gasPrice = new BN(5).times(10 ** 9); //5 Gwei
  //Method 2: Use web3 gasPrice
  // let gasPrice = await web3.eth.gasPrice;
  //Method 3: Use KNP Proxy maxGasPrice
  let gasPrice = await KYBER_NETWORK_PROXY_CONTRACT.methods.maxGasPrice().call();

  let maxGasPrice = await KYBER_NETWORK_PROXY_CONTRACT.methods
    .maxGasPrice()
    .call();
  //If gasPrice exceeds maxGasPrice, set it to max.
  if (gasPrice >= maxGasPrice) gasPrice = maxGasPrice;
  console.log('gasprice',gasPrice)
  console.log('maxgas',maxGasPrice)
  let rawTx = {
    from: from,
    to: to,
    data: txData,
    value: web3.utils.toHex(value),
    gasLimit: web3.utils.toHex(gasLimit),
    gasPrice: web3.utils.toHex(gasPrice),
    nonce: txCount
  };

  // let tx = new Tx(rawTx, {chain:'ropsten', hardfork: 'petersburg'});

  // tx.sign(PRIVATE_KEY);
  // const serializedTx = tx.serialize();
  // console.log('serialisedtx',serializedTx)
  // let txReceipt = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
  // .on('receipt', console.log)
  // .catch(error => console.log(error));
  let txReceipt =  web3.eth.sendTransaction(rawTx,() =>{
    console.log('suucess')
  }).catch(error => console.log(error))
  console.log("complete")
  // Log the tx receipt
  // console.log(txReceipt);
  return;
}

async function approveContract(allowance) {
  console.log("Approving KNP contract to manage my KNC");
  let txData = await SRC_TOKEN_CONTRACT.methods
    .approve('0xDD957f3d779dA9cC375b3aeec323F3fCd0d088CC', allowance)
    .encodeABI();
  console.log('tx data',txData, USER_ADDRESS)
  
  await broadcastTx(
    USER_ADDRESS,
    SRC_TOKEN_ADDRESS,
    txData,
    0, //Ether value to be sent should be zero
    "300000" //gasLimit
  ).catch(error => console.log(error));
}


export default async user => {
  USER_ADDRESS = user;
  // Calculate slippage rate
  KYBER_NETWORK_PROXY_CONTRACT = new web3.eth.Contract(
    KYBER_NETWORK_PROXY_ABI,
    KYBER_NETWORK_PROXY_ADDRESS
  );
  SRC_TOKEN_CONTRACT = new web3.eth.Contract(ERC20_ABI, SRC_TOKEN_ADDRESS);
  console.log(USER_ADDRESS)
  contract = new web3.eth.Contract(myContract,"0x100dE5bCd310E42884d8cF447D9FeCc903AF78C2");
  main();
  
};

