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
  numbers = numbers.slice(0,index).concat(numbers.slice(index+1));

  return numbers;
}

const maxSort = function(arrayToSort) {
  let sortedArray = [];
  let newArray = arrayToSort;
  let length = arrayToSort.length;

  for (let i = 0; i < arrayToSort.length; i++) {
    let max = newArray[0];

    for(let index = 0; index < length ; index++) {
      max = Math.max(max, newArray[index]);
    }
    sortedArray.push(max);
    newArray = ejectAt(newArray.indexOf(max), newArray);
    length--;
  }
  return sortedArray;
}

//console.log(maxSort([1,3,6,2]));

exports.maxSort = maxSort;

