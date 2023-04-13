const vendingMachine = require('./../src/vending-machine.js');
const testing = require('./../lib/testing.js');

const assert = testing.assert;
const printHeadLine = testing.printHeadLine;
const determineNoOfCoins = vendingMachine.determineNoOfCoins;
const maxSort = vendingMachine.maxSort;
const assertArray= testing.assertArray;
const maxOf = vendingMachine.maxOf;
const calculateNoOfCoins = vendingMachine.calculateNoOfCoins;
const assertObj = testing.assertObj;
const main = vendingMachine.main;

const testVendingMachine = function() {
  printHeadLine("\nTesting for determineNoOfCoins");
  assert(0, determineNoOfCoins(0, [1, 2]), " 0 coin for amount 0");
  assert(1, determineNoOfCoins(1, [1, 2]), " total 1 coin of rs 1 for amount : 1rs");
  assert(1, determineNoOfCoins(2, [1, 2]), " total 1 coin of rs.2 for amount : 2rs");
  assert(2, determineNoOfCoins(3, [1, 2]), " total 2 coin of rs 2 and 1 for amount : 3rs");
  assert(7, determineNoOfCoins(13, [1, 2]), " total 7 coin of rs 2 and 1 for amount : 13rs");
  assert(1, determineNoOfCoins(5, [1, 2, 5]), " total 1 coin of rs 5 for amount : 5rs");
  assert(3, determineNoOfCoins(15, [5]), " total 3 coin of rs 5 for amount : 15rs");
  assert(2, determineNoOfCoins(10, [1, 2, 5]), " total 2 coin of rs 5 for amount : 10rs");
  assert(3, determineNoOfCoins(9, [1, 2, 5, 10]), " total 3 coin of rs 5 and 2 for amount : 9rs");
  assert(2, determineNoOfCoins(12, [1, 2, 10]), " total 2 coin of rs 10 and 2 for amount : 12rs");
  assert(4, determineNoOfCoins(13, [1, 4, 7]), " total 4 coin of rs 7,2 and 1 for amount : 13rs");
  assert(4, determineNoOfCoins(13, [1, 7, 4]), " total 4 coin of rs 7,2 and 1 for amount : 13rs");
}


const testMaxSort = function() {
  printHeadLine("\n Testing for maxSort");
  assertArray([], maxSort([]), " empty for empty array")
  assertArray([1], maxSort([1]), " 1 for 1")
  assertArray([2, 1], maxSort([1, 2]), " 2,1 for 1,2")
  assertArray([2, 1, 1], maxSort([1, 2, 1]), " 2,1,1 for 1,2,1")
  assertArray([2, 0,-3], maxSort([2, -3, 0]), " 2,0,-3  for 2,-3, 0")

}

const testMaxOf = function() {
  printHeadLine("\nTesting for max in array");

  //assert(undefined, maxOf([]), " empty for empty array")
  assert(1, maxOf([1]), " 1 for 1")
  assert(2, maxOf([1,2]), " 2 for 1,2")
  assert(3, maxOf([1,3,0]), " 3 for 1,3,0")
  assert(2, maxOf([2,0,1]), " 2 for 2,0,1")
  assert(1, maxOf([-2,-5, 0, 1]), " 1 for -2,-5,0,1")

}

//const testCalculateNoOfCoins = function(){
//  printHeadLine("\nTesting for calculateNoOfCoins");
//  assertArray([0],calculateNoOfCoins(0, [1]), " 0 coins for 0rs");
//  assertArray([0,1],calculateNoOfCoins(1, [1,2]), " [0,1] of [2,1] coins respectively for Amount : 1rs");
//  assertArray([2,0],calculateNoOfCoins(4, [1,2]), " [2,0] of [2,1] coins respectively for Amount : 4rs");
//}

const testCalculateNoOfCoins = function() {
  printHeadLine("\n testing for calculateNoOfCoins");
  assertObj({'1':0},main(0,[1]), "{'1':0 } for Rs. 0");
  assertObj({'1':0, '2':2},main(4,[1,2]), "{'1':0, '2':2 } for Rs. 4");

}

testMaxOf();
testMaxSort();
testVendingMachine();
testCalculateNoOfCoins();
testing.getSummary();[1,2]
