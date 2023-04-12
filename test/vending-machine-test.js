const vendingMachine = require('./../src/vending-machine.js');
const testing = require('./../lib/testing.js');

const assert = testing.assert;
const printHeadLine = testing.printHeadLine;
const determineNoOfCoins = vendingMachine.determineNoOfCoins;

const testVendingMachine = function() {
  printHeadLine("\nTesting for determineNoOfCoins");
  assert(0, determineNoOfCoins(0, [1, 2]), "should give 0 coin for amount 0");
  assert(1, determineNoOfCoins(1, [1, 2]), "should give total 1 coin of rs 1 for amount : 1rs");
  assert(1, determineNoOfCoins(2, [1, 2]), "should give total 1 coin of rs.2 for amount : 2rs");
  assert(2, determineNoOfCoins(3, [1, 2]), "should give total 2 coin of rs 2 and 1 for amount : 3rs");
  assert(7, determineNoOfCoins(13, [1, 2]), "should give total 7 coin of rs 2 and 1 for amount : 13rs");
  assert(1, determineNoOfCoins(5, [1, 2, 5]), "should give total 1 coin of rs 5 for amount : 5rs");
  assert(3, determineNoOfCoins(15, [5]), "should give total 3 coin of rs 5 for amount : 15rs");
  assert(2, determineNoOfCoins(10, [1, 2, 5]), "should give total 2 coin of rs 5 for amount : 10rs");
  assert(3, determineNoOfCoins(9, [1, 2, 5, 10]), "should give total 3 coin of rs 5 and 2 for amount : 9rs");
  assert(2, determineNoOfCoins(12, [1, 2, 10]), "should give total 2 coin of rs 10 and 2 for amount : 12rs");
}

testVendingMachine();
testing.getSummary();
