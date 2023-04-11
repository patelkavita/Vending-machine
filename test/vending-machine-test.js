const vendingMachine = require('./../src/vending-machine.js');
const testing = require('./../lib/testing.js');
const assert = testing.assert;


const testVendingMachine = function() {
  assert(vendingMachine.despenseCoins(1), 1, "should give 1 coin for 1rs. amount");
  assert(vendingMachine.despenseCoins(3), 3, "should give 3 coin for 3rs. amount");
}

testVendingMachine();
