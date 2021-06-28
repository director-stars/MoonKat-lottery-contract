

const Lottery = artifacts.require('Lottery');
const LotteryNFT = artifacts.require('LotteryNFT');
const LotteryUpgradeProxy = artifacts.require('LotteryUpgradeProxy');

module.exports = async function(deployer) {
  await deployer.deploy(Lottery);
}
