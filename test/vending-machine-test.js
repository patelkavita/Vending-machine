const vendingMachine = require('./../src/vending-machine.js');
const testing = require('./../lib/testing.js');
const assert = testing.assert;


const testVendingMachine = function() {
  assert(1, vendingMachine.determineNoOfCoins(1), "should give 1 coin of rs 1 for amount : 1rs");
  assert(2, vendingMachine.determineNoOfCoins(3), "should give 2 coin of rs 1 and 2 for amount : 3rs");
  assert(1, vendingMachine.determineNoOfCoins(2), "should give 1 coin of rs.2 for amount : 2rs");
  assert(1, vendingMachine.determineNoOfCoins(5), "should give 1 coin of rs 5 for amount : 5rs");
  assert(3, vendingMachine.determineNoOfCoins(9), "should give 2 coin of rs 2 and 5 for amount : 9rs");
  assert(1, vendingMachine.determineNoOfCoins(10), "should give 1 coin of rs 10 for amount : 10rs");
  assert(2, vendingMachine.determineNoOfCoins(12), "should give 2 coin of rs 10 and 2 for amount : 12rs");
  assert(3, vendingMachine.determineNoOfCoins(13), "should give 3 coin of rs 10, 2 and 1 for amount : 13rs");
  assert(2, vendingMachine.determineNoOfCoins(15), "should give 2 coin of rs 10 and 5 for amount : 15rs");
}

testVendingMachine();
