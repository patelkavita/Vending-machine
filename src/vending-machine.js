const determineNoOfCoins = function(amount) {
  const denominations = [10, 5, 2, 1];
  let coins = 0;
  let amountRemaining = amount;
  let totalNoOfCoins = 0;

  for(let values = 0;  values < denominations.length; values++) {
    if (amountRemaining >= denominations[values]) {
      coins = Math.floor(amountRemaining / denominations[values]); 
      totalNoOfCoins = totalNoOfCoins + coins;
      amountRemaining = amountRemaining - (coins * denominations[values]);
    } 
  }

  return totalNoOfCoins;
}
exports.determineNoOfCoins = determineNoOfCoins;
