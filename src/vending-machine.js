const determineNoOfCoins = function(amount,denominations) {
  const denominationsArray = maxSort(denominations); 
  let coins = 0;
  let amountRemaining = amount;
  let totalNoOfCoins = 0;

  for(let values = denominations.length-1;  values >=0; values--) {
    if (amountRemaining >= denominations[values]) {
      coins = Math.floor(amountRemaining / denominations[values]); 
      totalNoOfCoins = totalNoOfCoins + coins;
      amountRemaining = amountRemaining - (coins * denominations[values]);
    } 
  }

  return totalNoOfCoins;
}
exports.determineNoOfCoins = determineNoOfCoins;

/*************************************************************************/

const ejectAt = function(index,numbers) {
  return numbers.slice(0,index).concat(numbers.slice(index+1));
}

const maxOf = function(array) {
  let max = array[0];
  for(let index = 0; index < array.length ; index++) {
    max = Math.max(max, array[index]);
  }

  return max;
}

const maxSort = function(array) {
  let sortedArray = [];
  let copyOfArray = array;

  for (let i = 0; i < array.length; i++) {
    max = maxOf(copyOfArray);
    sortedArray.push(max);
    copyOfArray = ejectAt(copyOfArray.indexOf(max), copyOfArray);
  }

  return sortedArray;
}


exports.maxSort = maxSort;
exports.maxOf = maxOf;
