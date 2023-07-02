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
    mumbai: {
      provider: () =>
        new HDWalletProvider(process.env.MNEMONIC, process.env.RPC_URL),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  dashboard: {
    // host: "172.27.70.203",
    // port: 8545,
    autoOpen: false
  },
  compilers: {
    solc: {
      version: "0.8.20",
    },
  },
};
