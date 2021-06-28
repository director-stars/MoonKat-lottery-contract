// 


module.exports = async function draw(callback) {
  try {
    const LotteryContract = artifacts.require('Lottery');

    const lotteryInstance = await LotteryContract.deployed();
    randomNumber = Math.floor(Math.random() * 100);
    
    await lotteryInstance.enterDrawingPhase();
    await lotteryInstance.drawing(randomNumber);
    
    callback(0);
  } catch (err) {
    console.error(err);
    callback(1);
  }
}
