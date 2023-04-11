const vendingMachine = require('./../src/vending-machine.js');
const testing = require('./../lib/testing.js');

const testVendingMachine = function() {
  testing.assert(vendingMachine.value, 4, "should give four");
}

testVendingMachine();
