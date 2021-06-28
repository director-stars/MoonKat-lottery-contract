const LotteryNFT = artifacts.require('LotteryNFT');

module.exports = async function(deployer) {
  await deployer.deploy(LotteryNFT);
}