const determineNoOfCoins = function(amount) {
  let coins = 0;
  let amountRemaining = amount;

  if (amountRemaining >= 10 ) {
    coins += Math.floor(amountRemaining / 10); 
    amountRemaining = amountRemaining - (coins * 10 );
  } 

  if (amountRemaining >= 5 ) {
    coins += Math.floor(amountRemaining / 5); 
    amountRemaining = amountRemaining - (coins * 5 );
  }

  if (amountRemaining >= 2 ) {
    coins += Math.floor(amountRemaining / 2); 
    amountRemaining = amountRemaining - (coins * 2 );
  }

  if (amountRemaining >= 1 ) {
    coins += Math.floor(amountRemaining / 1); 
    amountRemaining = amountRemaining - (coins * 1 );
  }

  return coins;
}

exports.determineNoOfCoins = determineNoOfCoins;
