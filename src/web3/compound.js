const abi = [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "signature": "0x06fdde03",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "signature": "0x095ea7b3",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "reserveFactorMantissa",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x173b9904",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "borrowBalanceCurrent",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x17bfdfbc",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x18160ddd",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "exchangeRateStored",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x182df0f5",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "src",
          "type": "address"
        },
        {
          "name": "dst",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "signature": "0x23b872dd",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "pendingAdmin",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "signature": "0x26782247",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x313ce567",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOfUnderlying",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x3af9e669",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCash",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x3b1d21a2",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newComptroller",
          "type": "address"
        }
      ],
      "name": "_setComptroller",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x4576b5db",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalBorrows",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x47bd3718",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "comptroller",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "signature": "0x5fe3b567",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "reduceAmount",
          "type": "uint256"
        }
      ],
      "name": "_reduceReserves",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x601a0bf1",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "initialExchangeRateMantissa",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x675d972c",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "accrualBlockNumber",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x6c540baf",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x70a08231",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "totalBorrowsCurrent",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x73acee98",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalReserves",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x8f840ddd",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "signature": "0x95d89b41",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "borrowBalanceStored",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x95dd9193",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "accrueInterest",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xa6afed95",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "dst",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "signature": "0xa9059cbb",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "borrowIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xaa5af0fd",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "supplyRatePerBlock",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xae9d70b0",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "liquidator",
          "type": "address"
        },
        {
          "name": "borrower",
          "type": "address"
        },
        {
          "name": "seizeTokens",
          "type": "uint256"
        }
      ],
      "name": "seize",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xb2a02ff1",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newPendingAdmin",
          "type": "address"
        }
      ],
      "name": "_setPendingAdmin",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xb71d1a0c",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "exchangeRateCurrent",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xbd6d894d",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getAccountSnapshot",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
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
      "signature": "0xc37f68e2",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xdd62ed3e",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "_acceptAdmin",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xe9c714f2",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newInterestRateModel",
          "type": "address"
        }
      ],
      "name": "_setInterestRateModel",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xf2b3abbd",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "interestRateModel",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "signature": "0xf3fdb15a",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "signature": "0xf851a440",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "borrowRatePerBlock",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xf8f9da28",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newReserveFactorMantissa",
          "type": "uint256"
        }
      ],
      "name": "_setReserveFactor",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xfca7820b",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isCToken",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "signature": "0xfe9c44ae",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "comptroller_",
          "type": "address"
        },
        {
          "name": "interestRateModel_",
          "type": "address"
        },
        {
          "name": "initialExchangeRateMantissa_",
          "type": "uint256"
        },
        {
          "name": "name_",
          "type": "string"
        },
        {
          "name": "symbol_",
          "type": "string"
        },
        {
          "name": "decimals_",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "constructor",
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "interestAccumulated",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "borrowIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "totalBorrows",
          "type": "uint256"
        }
      ],
      "name": "AccrueInterest",
      "signature": "0x875352fb3fadeb8c0be7cbbe8ff761b308fa7033470cd0287f02f3436fd76cb9",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "minter",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "mintAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "mintTokens",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "signature": "0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "redeemer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "redeemAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "redeemTokens",
          "type": "uint256"
        }
      ],
      "name": "Redeem",
      "signature": "0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "borrower",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "borrowAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "accountBorrows",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "totalBorrows",
          "type": "uint256"
        }
      ],
      "name": "Borrow",
      "signature": "0x13ed6866d4e1ee6da46f845c46d7e54120883d75c5ea9a2dacc1c4ca8984ab80",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "payer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "borrower",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "repayAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "accountBorrows",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "totalBorrows",
          "type": "uint256"
        }
      ],
      "name": "RepayBorrow",
      "signature": "0x1a2a22cb034d26d1854bdc6666a5b91fe25efbbb5dcad3b0355478d6f5c362a1",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "liquidator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "borrower",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "repayAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "cTokenCollateral",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "seizeTokens",
          "type": "uint256"
        }
      ],
      "name": "LiquidateBorrow",
      "signature": "0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldPendingAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newPendingAdmin",
          "type": "address"
        }
      ],
      "name": "NewPendingAdmin",
      "signature": "0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "NewAdmin",
      "signature": "0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldComptroller",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newComptroller",
          "type": "address"
        }
      ],
      "name": "NewComptroller",
      "signature": "0x7ac369dbd14fa5ea3f473ed67cc9d598964a77501540ba6751eb0b3decf5870d",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldInterestRateModel",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newInterestRateModel",
          "type": "address"
        }
      ],
      "name": "NewMarketInterestRateModel",
      "signature": "0xedffc32e068c7c95dfd4bdfd5c4d939a084d6b11c4199eac8436ed234d72f926",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldReserveFactorMantissa",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "newReserveFactorMantissa",
          "type": "uint256"
        }
      ],
      "name": "NewReserveFactor",
      "signature": "0xaaa68312e2ea9d50e16af5068410ab56e1a1fd06037b1a35664812c30f821460",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "admin",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "reduceAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "newTotalReserves",
          "type": "uint256"
        }
      ],
      "name": "ReservesReduced",
      "signature": "0x3bad0c59cf2f06e7314077049f48a93578cd16f5ef92329f1dab1420a99c177e",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "error",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "info",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "detail",
          "type": "uint256"
        }
      ],
      "name": "Failure",
      "signature": "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "mint",
      "outputs": [],
      "payable": true,
      "signature": "0x1249c58b",
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "redeemTokens",
          "type": "uint256"
        }
      ],
      "name": "redeem",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xdb006a75",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "redeemAmount",
          "type": "uint256"
        }
      ],
      "name": "redeemUnderlying",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x852a12e3",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "borrowAmount",
          "type": "uint256"
        }
      ],
      "name": "borrow",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xc5ebeaec",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "repayBorrow",
      "outputs": [],
      "payable": true,
      "signature": "0x4e4d9fea",
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "borrower",
          "type": "address"
        }
      ],
      "name": "repayBorrowBehalf",
      "outputs": [],
      "payable": true,
      "signature": "0xe5974619",
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "borrower",
          "type": "address"
        },
        {
          "name": "cTokenCollateral",
          "type": "address"
        }
      ],
      "name": "liquidateBorrow",
      "outputs": [],
      "payable": true,
      "signature": "0xaae40a2a",
      "stateMutability": "payable",
      "type": "function"
    }
  ];
  
  
  const daiAbi = [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "signature": "0x06fdde03",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "signature": "0x095ea7b3",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "reserveFactorMantissa",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x173b9904",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "borrowBalanceCurrent",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x17bfdfbc",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x18160ddd",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "exchangeRateStored",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x182df0f5",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "src",
          "type": "address"
        },
        {
          "name": "dst",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "signature": "0x23b872dd",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "pendingAdmin",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "signature": "0x26782247",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x313ce567",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOfUnderlying",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x3af9e669",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCash",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x3b1d21a2",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newComptroller",
          "type": "address"
        }
      ],
      "name": "_setComptroller",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x4576b5db",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalBorrows",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x47bd3718",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "comptroller",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "signature": "0x5fe3b567",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "reduceAmount",
          "type": "uint256"
        }
      ],
      "name": "_reduceReserves",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x601a0bf1",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "initialExchangeRateMantissa",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x675d972c",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "accrualBlockNumber",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x6c540baf",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "underlying",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "signature": "0x6f307dc3",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x70a08231",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "totalBorrowsCurrent",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x73acee98",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalReserves",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x8f840ddd",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "signature": "0x95d89b41",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "borrowBalanceStored",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x95dd9193",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "accrueInterest",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xa6afed95",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "dst",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "signature": "0xa9059cbb",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "borrowIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xaa5af0fd",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "supplyRatePerBlock",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xae9d70b0",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "liquidator",
          "type": "address"
        },
        {
          "name": "borrower",
          "type": "address"
        },
        {
          "name": "seizeTokens",
          "type": "uint256"
        }
      ],
      "name": "seize",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xb2a02ff1",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newPendingAdmin",
          "type": "address"
        }
      ],
      "name": "_setPendingAdmin",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xb71d1a0c",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "exchangeRateCurrent",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xbd6d894d",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getAccountSnapshot",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
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
      "signature": "0xc37f68e2",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xdd62ed3e",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "_acceptAdmin",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xe9c714f2",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newInterestRateModel",
          "type": "address"
        }
      ],
      "name": "_setInterestRateModel",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xf2b3abbd",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "interestRateModel",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "signature": "0xf3fdb15a",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "signature": "0xf851a440",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "borrowRatePerBlock",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xf8f9da28",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newReserveFactorMantissa",
          "type": "uint256"
        }
      ],
      "name": "_setReserveFactor",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xfca7820b",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isCToken",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "signature": "0xfe9c44ae",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "underlying_",
          "type": "address"
        },
        {
          "name": "comptroller_",
          "type": "address"
        },
        {
          "name": "interestRateModel_",
          "type": "address"
        },
        {
          "name": "initialExchangeRateMantissa_",
          "type": "uint256"
        },
        {
          "name": "name_",
          "type": "string"
        },
        {
          "name": "symbol_",
          "type": "string"
        },
        {
          "name": "decimals_",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "constructor",
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "interestAccumulated",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "borrowIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "totalBorrows",
          "type": "uint256"
        }
      ],
      "name": "AccrueInterest",
      "signature": "0x875352fb3fadeb8c0be7cbbe8ff761b308fa7033470cd0287f02f3436fd76cb9",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "minter",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "mintAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "mintTokens",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "signature": "0x4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "redeemer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "redeemAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "redeemTokens",
          "type": "uint256"
        }
      ],
      "name": "Redeem",
      "signature": "0xe5b754fb1abb7f01b499791d0b820ae3b6af3424ac1c59768edb53f4ec31a929",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "borrower",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "borrowAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "accountBorrows",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "totalBorrows",
          "type": "uint256"
        }
      ],
      "name": "Borrow",
      "signature": "0x13ed6866d4e1ee6da46f845c46d7e54120883d75c5ea9a2dacc1c4ca8984ab80",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "payer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "borrower",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "repayAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "accountBorrows",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "totalBorrows",
          "type": "uint256"
        }
      ],
      "name": "RepayBorrow",
      "signature": "0x1a2a22cb034d26d1854bdc6666a5b91fe25efbbb5dcad3b0355478d6f5c362a1",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "liquidator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "borrower",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "repayAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "cTokenCollateral",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "seizeTokens",
          "type": "uint256"
        }
      ],
      "name": "LiquidateBorrow",
      "signature": "0x298637f684da70674f26509b10f07ec2fbc77a335ab1e7d6215a4b2484d8bb52",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldPendingAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newPendingAdmin",
          "type": "address"
        }
      ],
      "name": "NewPendingAdmin",
      "signature": "0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "NewAdmin",
      "signature": "0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldComptroller",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newComptroller",
          "type": "address"
        }
      ],
      "name": "NewComptroller",
      "signature": "0x7ac369dbd14fa5ea3f473ed67cc9d598964a77501540ba6751eb0b3decf5870d",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldInterestRateModel",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newInterestRateModel",
          "type": "address"
        }
      ],
      "name": "NewMarketInterestRateModel",
      "signature": "0xedffc32e068c7c95dfd4bdfd5c4d939a084d6b11c4199eac8436ed234d72f926",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldReserveFactorMantissa",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "newReserveFactorMantissa",
          "type": "uint256"
        }
      ],
      "name": "NewReserveFactor",
      "signature": "0xaaa68312e2ea9d50e16af5068410ab56e1a1fd06037b1a35664812c30f821460",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "admin",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "reduceAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "newTotalReserves",
          "type": "uint256"
        }
      ],
      "name": "ReservesReduced",
      "signature": "0x3bad0c59cf2f06e7314077049f48a93578cd16f5ef92329f1dab1420a99c177e",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "error",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "info",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "detail",
          "type": "uint256"
        }
      ],
      "name": "Failure",
      "signature": "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "signature": "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "signature": "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "mintAmount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xa0712d68",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "redeemTokens",
          "type": "uint256"
        }
      ],
      "name": "redeem",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xdb006a75",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "redeemAmount",
          "type": "uint256"
        }
      ],
      "name": "redeemUnderlying",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x852a12e3",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "borrowAmount",
          "type": "uint256"
        }
      ],
      "name": "borrow",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xc5ebeaec",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "repayAmount",
          "type": "uint256"
        }
      ],
      "name": "repayBorrow",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x0e752702",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "borrower",
          "type": "address"
        },
        {
          "name": "repayAmount",
          "type": "uint256"
        }
      ],
      "name": "repayBorrowBehalf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x2608f818",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "borrower",
          "type": "address"
        },
        {
          "name": "repayAmount",
          "type": "uint256"
        },
        {
          "name": "cTokenCollateral",
          "type": "address"
        }
      ],
      "name": "liquidateBorrow",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xf5e3c462",
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
  
  
  const trollAbi = [
    {
      "constant": true,
      "inputs": [],
      "name": "comptrollerImplementation",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "signature": "0xbb82aa5e",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "pendingComptrollerImplementation",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "signature": "0xdcfbc0c7",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "admin",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "signature": "0xf851a440",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "signature": "constructor",
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldPendingImplementation",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newPendingImplementation",
          "type": "address"
        }
      ],
      "name": "NewPendingImplementation",
      "signature": "0xe945ccee5d701fc83f9b8aa8ca94ea4219ec1fcbd4f4cab4f0ea57c5c3e1d815",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldImplementation",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newImplementation",
          "type": "address"
        }
      ],
      "name": "NewImplementation",
      "signature": "0xd604de94d45953f9138079ec1b82d533cb2160c906d1076d1f7ed54befbca97a",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newPendingImplementation",
          "type": "address"
        }
      ],
      "name": "_setPendingImplementation",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xe992a041",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "_acceptImplementation",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xc1e80334",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newPendingAdmin",
          "type": "address"
        }
      ],
      "name": "_setPendingAdmin",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xb71d1a0c",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "_acceptAdmin",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xe9c714f2",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isComptroller",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "signature": "0x007e3dd2",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "pendingAdmin",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "signature": "0x26782247",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "liquidationIncentiveMantissa",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x4ada90af",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "oracle",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "signature": "0x7dc0d1d0",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "markets",
      "outputs": [
        {
          "name": "isListed",
          "type": "bool"
        },
        {
          "name": "collateralFactorMantissa",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x8e8f294b",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "maxAssets",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x94b2294b",
      "stateMutability": "view",
      "type": "function"
    },
  
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "accountAssets",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "signature": "0xdce15449",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "closeFactorMantissa",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xe8755446",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "signature": "constructor",
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "cToken",
          "type": "address"
        }
      ],
      "name": "MarketListed",
      "signature": "0xcf583bb0c569eb967f806b11601c4cb93c10310485c67add5f8362c2f212321f",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "cToken",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MarketEntered",
      "signature": "0x3ab23ab0d51cccc0c3085aec51f99228625aa1a922b3a8ca89a26b0f2027a1a5",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "cToken",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MarketExited",
      "signature": "0xe699a64c18b07ac5b7301aa273f36a2287239eb9501d81950672794afba29a0d",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldPendingAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newPendingAdmin",
          "type": "address"
        }
      ],
      "name": "NewPendingAdmin",
      "signature": "0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "NewAdmin",
      "signature": "0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldCloseFactorMantissa",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "newCloseFactorMantissa",
          "type": "uint256"
        }
      ],
      "name": "NewCloseFactor",
      "signature": "0x3b9670cf975d26958e754b57098eaa2ac914d8d2a31b83257997b9f346110fd9",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "cToken",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "oldCollateralFactorMantissa",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "newCollateralFactorMantissa",
          "type": "uint256"
        }
      ],
      "name": "NewCollateralFactor",
      "signature": "0x70483e6592cd5182d45ac970e05bc62cdcc90e9d8ef2c2dbe686cf383bcd7fc5",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldLiquidationIncentiveMantissa",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "newLiquidationIncentiveMantissa",
          "type": "uint256"
        }
      ],
      "name": "NewLiquidationIncentive",
      "signature": "0xaeba5a6c40a8ac138134bff1aaa65debf25971188a58804bad717f82f0ec1316",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldMaxAssets",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "newMaxAssets",
          "type": "uint256"
        }
      ],
      "name": "NewMaxAssets",
      "signature": "0x7093cf1eb653f749c3ff531d6df7f92764536a7fa0d13530cd26e070780c32ea",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "oldPriceOracle",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newPriceOracle",
          "type": "address"
        }
      ],
      "name": "NewPriceOracle",
      "signature": "0xd52b2b9b7e9ee655fcb95d2e5b9e0c9f69e7ef2b8e9d2d0ea78402d576d22e22",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "error",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "info",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "detail",
          "type": "uint256"
        }
      ],
      "name": "Failure",
      "signature": "0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getAssetsIn",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "signature": "0xabfceffc",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        },
        {
          "name": "cToken",
          "type": "address"
        }
      ],
      "name": "checkMembership",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "signature": "0x929fe9a1",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "cTokens",
          "type": "address[]"
        }
      ],
      "name": "enterMarkets",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "signature": "0xc2998238",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "cTokenAddress",
          "type": "address"
        }
      ],
      "name": "exitMarket",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xede4edd0",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "cToken",
          "type": "address"
        },
        {
          "name": "minter",
          "type": "address"
        },
        {
          "name": "mintAmount",
          "type": "uint256"
        }
      ],
      "name": "mintAllowed",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x4ef4c3e1",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "cToken",
          "type": "address"
        },
        {
          "name": "minter",
          "type": "address"
        },
        {
          "name": "mintAmount",
          "type": "uint256"
        },
        {
          "name": "mintTokens",
          "type": "uint256"
        }
      ],
      "name": "mintVerify",
      "outputs": [],
      "payable": false,
      "signature": "0x41c728b9",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "cToken",
          "type": "address"
        },
        {
          "name": "redeemer",
          "type": "address"
        },
        {
          "name": "redeemTokens",
          "type": "uint256"
        }
      ],
      "name": "redeemAllowed",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xeabe7d91",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "cToken",
          "type": "address"
        },
        {
          "name": "redeemer",
          "type": "address"
        },
        {
          "name": "redeemAmount",
          "type": "uint256"
        },
        {
          "name": "redeemTokens",
          "type": "uint256"
        }
      ],
      "name": "redeemVerify",
      "outputs": [],
      "payable": false,
      "signature": "0x51dff989",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "cToken",
          "type": "address"
        },
        {
          "name": "borrower",
          "type": "address"
        },
        {
          "name": "borrowAmount",
          "type": "uint256"
        }
      ],
      "name": "borrowAllowed",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xda3d454c",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "cToken",
          "type": "address"
        },
        {
          "name": "borrower",
          "type": "address"
        },
        {
          "name": "borrowAmount",
          "type": "uint256"
        }
      ],
      "name": "borrowVerify",
      "outputs": [],
      "payable": false,
      "signature": "0x5c778605",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "cToken",
          "type": "address"
        },
        {
          "name": "payer",
          "type": "address"
        },
        {
          "name": "borrower",
          "type": "address"
        },
        {
          "name": "repayAmount",
          "type": "uint256"
        }
      ],
      "name": "repayBorrowAllowed",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x24008a62",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "cToken",
          "type": "address"
        },
        {
          "name": "payer",
          "type": "address"
        },
        {
          "name": "borrower",
          "type": "address"
        },
        {
          "name": "repayAmount",
          "type": "uint256"
        }
      ],
      "name": "repayBorrowVerify",
      "outputs": [],
      "payable": false,
      "signature": "0xefcb03dd",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "cTokenBorrowed",
          "type": "address"
        },
        {
          "name": "cTokenCollateral",
          "type": "address"
        },
        {
          "name": "liquidator",
          "type": "address"
        },
        {
          "name": "borrower",
          "type": "address"
        },
        {
          "name": "repayAmount",
          "type": "uint256"
        }
      ],
      "name": "liquidateBorrowAllowed",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x5fc7e71e",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "cTokenBorrowed",
          "type": "address"
        },
        {
          "name": "cTokenCollateral",
          "type": "address"
        },
        {
          "name": "liquidator",
          "type": "address"
        },
        {
          "name": "borrower",
          "type": "address"
        },
        {
          "name": "repayAmount",
          "type": "uint256"
        },
        {
          "name": "seizeTokens",
          "type": "uint256"
        }
      ],
      "name": "liquidateBorrowVerify",
      "outputs": [],
      "payable": false,
      "signature": "0x47ef3b3b",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "cTokenCollateral",
          "type": "address"
        },
        {
          "name": "cTokenBorrowed",
          "type": "address"
        },
        {
          "name": "liquidator",
          "type": "address"
        },
        {
          "name": "borrower",
          "type": "address"
        },
        {
          "name": "seizeTokens",
          "type": "uint256"
        }
      ],
      "name": "seizeAllowed",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xd02f7351",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "cTokenCollateral",
          "type": "address"
        },
        {
          "name": "cTokenBorrowed",
          "type": "address"
        },
        {
          "name": "liquidator",
          "type": "address"
        },
        {
          "name": "borrower",
          "type": "address"
        },
        {
          "name": "seizeTokens",
          "type": "uint256"
        }
      ],
      "name": "seizeVerify",
      "outputs": [],
      "payable": false,
      "signature": "0x6d35bf91",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "account",
          "type": "address"
        }
      ],
      "name": "getAccountLiquidity",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
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
      "signature": "0x5ec88c79",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "cTokenBorrowed",
          "type": "address"
        },
        {
          "name": "cTokenCollateral",
          "type": "address"
        },
        {
          "name": "repayAmount",
          "type": "uint256"
        }
      ],
      "name": "liquidateCalculateSeizeTokens",
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
      "signature": "0xc488847b",
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOracle",
          "type": "address"
        }
      ],
      "name": "_setPriceOracle",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x55ee1fe1",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newCloseFactorMantissa",
          "type": "uint256"
        }
      ],
      "name": "_setCloseFactor",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x317b0b77",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "cToken",
          "type": "address"
        },
        {
          "name": "newCollateralFactorMantissa",
          "type": "uint256"
        }
      ],
      "name": "_setCollateralFactor",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xe4028eee",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newMaxAssets",
          "type": "uint256"
        }
      ],
      "name": "_setMaxAssets",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xd9226ced",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newLiquidationIncentiveMantissa",
          "type": "uint256"
        }
      ],
      "name": "_setLiquidationIncentive",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0x4fd42e17",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "cToken",
          "type": "address"
        }
      ],
      "name": "_supportMarket",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "signature": "0xa76b3fda",
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "unitroller",
          "type": "address"
        },
        {
          "name": "_oracle",
          "type": "address"
        },
        {
          "name": "_closeFactorMantissa",
          "type": "uint256"
        },
        {
          "name": "_maxAssets",
          "type": "uint256"
        },
        {
          "name": "reinitializing",
          "type": "bool"
        }
      ],
      "name": "_become",
      "outputs": [],
      "payable": false,
      "signature": "0x32000e00",
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
  
  
  //create account
  // console.log(web3.eth.accounts.create(web3.utils.randomHex(32)));
  
  
  
  let cETH ="0xbed6d9490a7cd81ff0f06f29189160a9641a358f";
  
  let CEther = new web3.eth.Contract(abi, cETH);
  let cDAI = "0x2acc448d73e8d53076731fea2ef3fc38214d0a7d"
  let cDaiInstance = new web3.eth.Contract(daiAbi, cDAI);
  let comptroller = "0x8d2a2836d44d6735a2f783e6418caedb86da58d8";
  const troll = new web3.eth.Contract(trollAbi, comptroller);
  
  const supply = () => {
    CEther.methods.supplyRatePerBlock().call().then((result) => {
        console.log(result /  1e18);
    
    }).catch(error => console.log(error));
    
    CEther.methods.mint().send({from: address, value: 2000000000000000000, gas : 2600000})
    .on('transactionHash', (hash) => {
        console.log("hash", hash)
    })
    .on('confirmation', (confirmationNumber, receipt) => {
        console.log("confirmationNumber", confirmationNumber)
        console.log("receipt", receipt)
    
    })
    .on('receipt', (receipt) => {
        // receipt example
        console.log("receipt", receipt);
    })
    .on('error', console.error); 
    
    troll.methods.enterMarkets([cETH, cDAI]).send({from: address  , gas : 2500000}).on('transactionHash', (hash) => {
        console.log("hash", hash)
    })
    .on('confirmation', (confirmationNumber, receipt) => {
        console.log("confirmationNumber", confirmationNumber)
        console.log("receipt", receipt)
    
    })
    .on('receipt', (receipt) => {
        // receipt example
        console.log("receipt", receipt);
    })
    .on('error', console.error); 
      
  }
  
  const borrow = () => {
    
    //change value to invest more
    CEther.methods.mint().send({from: address, value: 2000000000000000000, gas : 2600000})
    .on('transactionHash', (hash) => {
        console.log("hash", hash)
    })
    .on('confirmation', (confirmationNumber, receipt) => {
        console.log("confirmationNumber", confirmationNumber)
        console.log("receipt", receipt)
    
    })
    .on('receipt', (receipt) => {
        // receipt example
        console.log("receipt", receipt);
    })
    .on('error', console.error); 
    
    troll.methods.enterMarkets([cETH, cDAI]).send({from: address  , gas : 2500000}).on('transactionHash', (hash) => {
        console.log("hash", hash)
    })
    .on('confirmation', (confirmationNumber, receipt) => {
        console.log("confirmationNumber", confirmationNumber)
        console.log("receipt", receipt)
    
    })
    .on('receipt', (receipt) => {
        // receipt example
        console.log("receipt", receipt);
    })
    .on('error', console.error); 


  }

  

const getBack = () => {
    // change value inside redeem 
    cEther.methods.redeem(1).send({from: address, gas : 2600000})
    .on('transactionHash', (hash) => {
        console.log("hash", hash)
    })
    .on('confirmation', (confirmationNumber, receipt) => {
        console.log("confirmationNumber", confirmationNumber)
        console.log("receipt", receipt)
    
    })
    .on('receipt', (receipt) => {
        // receipt example
        console.log("receipt", receipt);
    })
    .on('error', console.error); 
}


async function liquidate (borrowAdd, sellerAdd) {
        await cToken.methods.liquidateBorrow(borrowAdd, 33, cEther).send({from: sellerAdd});
        return;
}