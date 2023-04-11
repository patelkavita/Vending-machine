const determineNoOfCoins = function(amount) {
  const fiveRsCoins = Math.floor(amount / 5);
  let amountRemaining = amount - (fiveRsCoins * 5);
  const twoRsCoins = Math.floor(amountRemaining / 2);
  amountRemaining = amountRemaining - (twoRsCoins * 2);
  const oneRsCoins = amountRemaining % 2;
  const totalCoins = fiveRsCoins+twoRsCoins + oneRsCoins;
  return totalCoins ;
}

exports.determineNoOfCoins = determineNoOfCoins;
