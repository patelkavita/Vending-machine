const vendingMachine = require('./../src/vending-machine.js');
const testing = require('./../lib/testing.js');
const assert = testing.assert;


const testVendingMachine = function() {
  assert(vendingMachine.determineNoOfCoins(1), 1, "should give 1 coin of rs 1 for amount : 1rs");
  assert(vendingMachine.determineNoOfCoins(3), 2, "should give 2 coin of rs 1 and 2 for amount : 3rs");
  assert(vendingMachine.determineNoOfCoins(2), 1, "should give 1 coin of rs. 2  for amount : 2rs");
  assert(vendingMachine.determineNoOfCoins(5), 1, "should give 1 coin of rs 5 for amount : 5rs");
  assert(vendingMachine.determineNoOfCoins(9), 3, "should give 2 coin of rs 2 and 5 for amount : 9rs");
  assert(vendingMachine.determineNoOfCoins(10), 2, "should give 2 coin of rs 5 for amount : 10rs");
}

testVendingMachine();
