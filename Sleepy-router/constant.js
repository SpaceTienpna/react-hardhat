const TOKENS = {
  sleepy: {
    address: "0x85f13db811c1d8e22679cf56ca91931562d837b2",
    amountDesired: (100 * 10 ** 18).toString(),
    amountMin: (10 * 10 ** 18).toString(),
    amountETHMin: (1 * 10 ** 18).toString(),
  },
};

const SWAP_EXACT_SENTINEL_FOR_TOKENS = {
  sleepy: {
    address: "0x85f13db811c1d8e22679cf56ca91931562d837b2",
    amountETH: (0.1 * 10 ** 18).toString(),
  },
};

const SENTINEL = "0x28afeecc16ef8c3cba817b1b91277b00d01ee9f6";
const DEADLINE = "2000000000";

module.exports = { TOKENS, SENTINEL, DEADLINE, SWAP_EXACT_SENTINEL_FOR_TOKENS };
