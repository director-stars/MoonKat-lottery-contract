
module.exports = async function test(callback) {
  try {
    const LotteryContract = artifacts.require('Lottery');
    const LotteryNFTContract = artifacts.require('LotteryNFT');

    const lotteryInstance = await LotteryContract.deployed();
    const lotteryNftInstance = await LotteryNFTContract.deployed();

    const minPrice = '50000000000000000000';
    const maxNumber = 12;

    console.log(process.env.OWNER);
    console.log(process.env.ADMIN);

    lotteryInstance.initialize(
      process.env.MKAT_ADDRESS,
      lotteryNftInstance.address,
      minPrice,
      maxNumber,
      process.env.OWNER,
      process.env.ADMIN
    );
    
    callback(0);
  } catch (err) {
    console.error(err);
    callback(1);
  }
}
