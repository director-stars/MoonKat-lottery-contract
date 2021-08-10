const web3 = require('web3');
const { BigNumber } = require("bignumber.js");

const lotto = {
    setup: {
        sizeOfLottery: 4,
        maxValidRange: 20,
        bucket: {
            one: 20,
            two: 50
        },
        bucketDiscount: {
            one: 5,
            two: 10,
            three: 15
        }
    },
    update: {
        sizeOfLottery: 5,
        maxValidRange: 100,
        bucket: {
            one: 30,
            two: 50
        },
        bucketDiscount: {
            one: 1,
            two: 5,
            three: 10
        }
    },
    newLotto: {
        distribution: [5, 10, 35, 50],
        prize: web3.utils.toBN('1000000000000000000000'),
        cost: web3.utils.toBN('10000000000000000000'),
        closeIncrease: 10000,
        endIncrease: 20000,
        win: {
            blankWinningNumbers: "0,0,0,0",
            simpleWinningNumbers: "1,2,3,4",
            winningNumbers: "18,17,5,3",
            winningNumbersArr: [ 18, 17, 5, 3 ],
            match_all: web3.utils.toBN(500 * (10 ** 18)),
            match_three: web3.utils.toBN(350 * (10 ** 18)),
            match_two: web3.utils.toBN(100 * (10 ** 18)),
            match_one: web3.utils.toBN(50 * (10 ** 18)),
        }
    }, 
    chainLink: {
        keyHash: "0xc251acd21ec4fb7f31bb8868288bfdbaeb4fbfec2df3735ddbd4f7dc8d60103c",
        fee: web3.utils.toBN('200000000000000000')
    },
    events: {
        new: "LotteryOpen",
        mint: "NewBatchMint",
        request: "requestNumbers"
    },
    buy: {
        mkat: web3.utils.toBN('10000000000000000000000000'),
        one: {
            cost: "10000000000000000000"
        },
        ten: {
            cost: "100000000000000000000"
        },
        fifty: {
            cost: "500000000000000000000"
        },
        max: {
            cost: "560000000000000000000"
        }
    },
    discount: {
        ten: {
            cost: "100000000000000000000",
            discount: "5000000000000000000",
            discountCost: "95000000000000000000"
        },
        thirty_five: {
            cost: "350000000000000000000",
            discount: "35000000000000000000",
            discountCost: "315000000000000000000"
        },
        fifty_one: {
            cost: "510000000000000000000",
            discount: "76500000000000000000",
            discountCost: "433500000000000000000"
        },
    },
    draw: {
        random: web3.utils.toBN("71812290232383789158325313353218754072886144180308695307717334628590412940628")
    },
    errorData: {
        distribution_length: [5, 10, 15, 20, 10],
        distribution_total: [5, 10, 15, 20],
        prize: web3.utils.toBN("0"),
        cost: web3.utils.toBN("0"),
        startTime: web3.utils.toBN("0"),
        ticketNumbers: [22, 15, 35, 40],
        bucket: 0
    },
    errors: {
        invalid_admin: "Ownable: caller is not the owner",
        invalid_distribution_length: "Invalid distribution",
        invalid_distribution_total: "Prize distribution is not 100%",
        invalid_price_or_cost: "Prize or cost cannot be 0",
        invalid_timestamp: "Timestamps for lottery invalid",
        invalid_mint_timestamp: "Invalid time for mint",
        invalid_mint_numbers: "Invalid chosen numbers",
        invalid_mint_approve: "ERC20: transfer amount exceeds allowance",
        invalid_draw_time: "Cannot set winning numbers during lottery",
        invalid_draw_repeat: "Lottery State incorrect for draw",
        invalid_claim_time: "Wait till end to claim",
        invalid_claim_draw: "Winning Numbers not chosen yet",
        invalid_claim_owner: "Only the owner can claim",
        invalid_claim_duplicate: "Ticket already claimed",
        invalid_claim_lottery: "Ticket not for this lottery",
        invalid_size_update_duplicate: "Cannot set to current size",
        invalid_numbers_range: "Numbers for ticket invalid",
        invalid_bucket_range: "Bucket range cannot be 0",
        invalid_bucket_discount: "Discounts must increase"
    }
}
const lottoNFT = {
    newLottoNft: {
        uri: "https://phoenixdefiswap.com/tokens/\{id\}"
    }
}

function generateLottoNumbers({
    numberOfTickets,
    lottoSize,
    maxRange
}) {
    var numberOfNumbers = [];
    let counterForNumbers = 0;
    for (let i = 0; i < numberOfTickets; i++) {
        for (let j = 0; j < lottoSize; j++) {
            numberOfNumbers[counterForNumbers] = Math.floor(Math.random() * maxRange + 1); 
            counterForNumbers += 1;
        }
    }
    return numberOfNumbers;
}

module.exports = {
    lotto,
    lottoNFT,
    BigNumber,
    generateLottoNumbers
}