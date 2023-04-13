const vendingMachine = require('./../src/vending-machine.js');
const testing = require('./../lib/testing.js');

const assert = testing.assert;
const printHeadLine = testing.printHeadLine;
const determineNoOfCoins = vendingMachine.determineNoOfCoins;
const maxSort = vendingMachine.maxSort;
const assertArray= testing.assertArray;
const maxOf = vendingMachine.maxOf;

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
  assert(4, determineNoOfCoins(13, [1, 4, 7]), "should give total 4 coin of rs 7,2 and 1 for amount : 13rs");
  assert(4, determineNoOfCoins(13, [1, 7, 4]), "should give total 4 coin of rs 7,2 and 1 for amount : 13rs");
}


const testMaxSort = function() {
  printHeadLine("\n Testing for maxSort");
  assertArray([], maxSort([]), "Should give empty for empty array")
  assertArray([1], maxSort([1]), "should give 1 for 1")
  assertArray([2, 1], maxSort([1, 2]), "Should give 2,1 for 1,2")
  assertArray([2, 1, 1], maxSort([1, 2, 1]), "Should give 2,1,1 for 1,2,1")
  assertArray([2, 0,-3], maxSort([2, -3, 0]), "Should give 2,0,-3  for 2,-3, 0")

}

const testMaxOf = function() {
  printHeadLine("\nTesting for max in array");

  //assert(undefined, maxOf([]), "Should give empty for empty array")
  assert(1, maxOf([1]), "Should give 1 for 1")
  assert(2, maxOf([1,2]), "Should give 2 for 1,2")
  assert(3, maxOf([1,3,0]), "Should give 3 for 1,3,0")
  assert(2, maxOf([2,0,1]), "Should give 2 for 2,0,1")
  assert(1, maxOf([-2,-5, 0, 1]), "Should give 1 for -2,-5,0,1")

}

testMaxOf();
testMaxSort();
testVendingMachine();
testing.getSummary();
