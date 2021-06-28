const { assertion } = require('@openzeppelin/test-helpers/src/expectRevert');

const { 
  lotto,
  lottoNFT,
  BigNumber,
  generateLottoNumbers
} = require("./settings.js");

const Lottery = artifacts.require('Lottery');
const LotteryNFT = artifacts.require('LotteryNFT');
const Mock_mkat = artifacts.require('Mock_mkat');
const Timer = artifacts.require('Timer');
const RandomNumberGenerator = artifacts.require('RandomNumberGenerator');
const Mock_VRFCoordinator = artifacts.require('Mock_VRFCoordinator');

contract("Lottery contract", async ([alice, bob, admin, dev, minter]) => {
  beforeEach(async () => {
    this.timerInstance = await Timer.new({
      from: minter
    });
    
    this.mkatInstance = await Mock_mkat.new(lotto.buy.mkat, {
      from: minter
    });
    
    this.linkInstance = await Mock_mkat.new(lotto.buy.mkat, {
      from: minter
    });
    
    this.mock_vrfCoordInstance = await Mock_VRFCoordinator.new(
      this.linkInstance.address,
      lotto.chainLink.keyHash,
      lotto.chainLink.fee,
      {
        from: minter
      }
    );

    this.lotteryInstance = await Lottery.new(
      this.mkatInstance.address,
      this.timerInstance.address,
      lotto.setup.sizeOfLottery,
      lotto.setup.maxValidRange,
      lotto.setup.bucket.one,
      lotto.setup.bucket.two,
      lotto.setup.bucketDiscount.one,
      lotto.setup.bucketDiscount.two,
      lotto.setup.bucketDiscount.three,
      {
        from: minter
      }
    );

    this.randGenInstance = await RandomNumberGenerator.new(
      this.mock_vrfCoordInstance.address,
      this.linkInstance.address,
      this.lotteryInstance.address,
      lotto.chainLink.keyHash,
      lotto.chainLink.fee,
      {
        from: minter
      }
    );

    this.lotteryNftInstance = await LotteryNFT.new(
      lottoNFT.newLottoNft.uri,
      this.lotteryInstance.address,
      this.timerInstance.address
    );

    await this.lotteryInstance.initialize(
      this.lotteryNftInstance.address,
      lotto.newLotto.prize
    );

    await this.mkatInstance.mint(
      this.lotteryInstance.address,
      lotto.newLotto.prize
    );

    await this.linkInstance.transfer(
      this.randGenInstance.address,
      lotto.buy.mkat
    );

  })
})
