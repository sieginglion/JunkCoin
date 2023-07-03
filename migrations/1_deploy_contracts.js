const JunkCoin = artifacts.require("JunkCoin");

module.exports = (deployer) => {
  deployer.deploy(JunkCoin);
};
