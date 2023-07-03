const dotenv = require("dotenv");
const HDWalletProvider = require("@truffle/hdwallet-provider");

dotenv.config();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
    },
    sepolia: {
      provider: () =>
        new HDWalletProvider(process.env.MNEMONIC, process.env.RPC_URL),
      network_id: 11155111,
      networkCheckTimeout: 60000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.20",
    },
  },
};
