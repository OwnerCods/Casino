const contracts = {
  11155111: [
    {
      chainId: "11155111",
      name: "sepolia",
      contracts: {
        Roulette: {
          address: "0x42DF7eAeAe0D501DfE63ad354E939aaa805e31B5",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "vrfCoordinatorV2",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "minBetValue",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxPlayers",
                  type: "uint256",
                },
                {
                  internalType: "bytes32",
                  name: "gasLane",
                  type: "bytes32",
                },
                {
                  internalType: "uint64",
                  name: "subscriptionId",
                  type: "uint64",
                },
                {
                  internalType: "uint32",
                  name: "callbackGasLimit",
                  type: "uint32",
                },
                {
                  internalType: "uint256",
                  name: "interval",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "have",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "want",
                  type: "address",
                },
              ],
              name: "OnlyCoordinatorCanFulfill",
              type: "error",
            },
            {
              inputs: [],
              name: "Roulette__InvalidBetNumbers",
              type: "error",
            },
            {
              inputs: [],
              name: "Roulette__InvalidBetValues",
              type: "error",
            },
            {
              inputs: [],
              name: "Roulette__InvalidWithdrawAmount",
              type: "error",
            },
            {
              inputs: [],
              name: "Roulette__NotEnoughETHEntered",
              type: "error",
            },
            {
              inputs: [],
              name: "Roulette__NotOpen",
              type: "error",
            },
            {
              inputs: [],
              name: "Roulette__ToManyPlayers",
              type: "error",
            },
            {
              inputs: [],
              name: "Roulette__ToMuchETHEntered",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
              ],
              name: "Roulette__TransferFailed",
              type: "error",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "totalBets",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "rouletteState",
                  type: "uint256",
                },
              ],
              name: "Roulette__UpkeepNotNeeded",
              type: "error",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint256",
                  name: "requestId",
                  type: "uint256",
                },
              ],
              name: "RequestedRouletteWinner",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "player",
                  type: "address",
                },
              ],
              name: "RouletteEnter",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "uint8",
                  name: "winningNumber",
                  type: "uint8",
                },
              ],
              name: "WinningNumberPicked",
              type: "event",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "checkUpkeep",
              outputs: [
                {
                  internalType: "bool",
                  name: "upkeepNeeded",
                  type: "bool",
                },
                {
                  internalType: "bytes",
                  name: "performData",
                  type: "bytes",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  components: [
                    {
                      internalType: "uint8",
                      name: "number",
                      type: "uint8",
                    },
                    {
                      internalType: "uint256",
                      name: "value",
                      type: "uint256",
                    },
                  ],
                  internalType: "struct Roulette.PlayerEntry[]",
                  name: "playerEntries",
                  type: "tuple[]",
                },
              ],
              name: "enterRoulette",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "getGameState",
              outputs: [
                {
                  internalType: "enum Roulette.GameState",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getInterval",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getLastWinningNumber",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getLatestTimeStamp",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getMaxPlayers",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getMinBetValue",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getNumWords",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "index",
                  type: "uint256",
                },
              ],
              name: "getPlayer",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getRequestConfirmations",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "pure",
              type: "function",
            },
            {
              inputs: [],
              name: "getTotalBets",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "getTotalPlayers",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              name: "performUpkeep",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "requestId",
                  type: "uint256",
                },
                {
                  internalType: "uint256[]",
                  name: "randomWords",
                  type: "uint256[]",
                },
              ],
              name: "rawFulfillRandomWords",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
