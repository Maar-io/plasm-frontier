export {
  TEST_CONTRACT_BYTECODE,
  TEST_CONTRACT_ABI,
  FIRST_CONTRACT_ADDRESS,
  TEST_CONTRACT_BYTECODE_INCR,
  TEST_CONTRACT_INCR_ABI,
  INFINITE_CONTRACT_BYTECODE,
  INFINITE_CONTRACT_ABI,
  INFINITE_CONTRACT_BYTECODE_VAR,
  INFINITE_CONTRACT_ABI_VAR,
  FINITE_LOOP_CONTRACT_BYTECODE,
  FINITE_LOOP_CONTRACT_ABI,
} from "./testContracts";

export { basicTransfertx, contractCreation } from "./transactionConfigs";

export const PORT = 19931;
export const RPC_PORT = 19932;
export const WS_PORT = 19933;
export const SPECS_PATH = `./moonbeam-test-specs`;

export const DISPLAY_LOG = process.env.FRONTIER_LOG || false;
export const FRONTIER_LOG = process.env.FRONTIER_LOG || "info";

export const BINARY_PATH = `../target/debug/frontier-template-node`;
export const SPAWNING_TIME = 30000;

// Test variables
export const GENESIS_ACCOUNT = "0x6be02d1d3665660d22ff9624b7be0551ee1ac91b";
export const GENESIS_ACCOUNT_PRIVATE_KEY =
  "0x99B3C12287537E38C90A9219D4CB074A89A16E9CDB20BF85728EBD97C343E342";
export const TEST_ACCOUNT = "0x1111111111111111111111111111111111111111";


// TESTING NOTES
//
// BLOCK TESTING
// - block dont seem to have gas limit but it's usually around 1500 tx per block
// and the time it takes to construct the block increases until around 12s for 1500tx
// - after the first 1500tx block, following block have aroudn 100-300 tx per block until all blocks are incuded. 10 blockds for 3000tx
// - between 7k and 10k, for some reason block creation doesnt work and we get one Pool(ImmediatelyDropped) error
// and  Pool(TooLowPriority { old: 0, new: 0 })': 819 for the contract creation
//
// INFINITE LOOP
// - infinite loop contract should throw out of gas error, but they don't and they are included in the block.
// - there are some rpc errors sometimes
// - the state remains unchanged tho (test with infinite incremental contract)
//
// FINITE LOOP
// - making a 1000 loop incr on a smart contract doesnt pass but doesnt throw error either (although it does include the tx in a block)
// => is there a problem with out of gas error
// =>probably because we don't have the concept of gas?
// - posting a tx that goes over the gas limit/tx does throw an out of gas error in the debug log but not in js

//NB: https://github.com/paritytech/frontier/blob/master/frame/ethereum/src/lib.rs show that root=0 when error is thrown,
//which is something we can see when fethcing receipt
// also the current block limit is zero

// Should I test without manual seal?
