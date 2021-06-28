// 


module.exports = async function reset(callback) {
  try {
    const LotteryContract = artifacts.require('Lottery');
    
    lotteryInstance.reset();
    
    callback(0);
  } catch (err) {
    console.error(err);
    callback(1);
  }
}
