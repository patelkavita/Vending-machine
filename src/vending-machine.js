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


/********** No. Of Coins ****************/

const calculateNoOfCoins = function(amount, denomination) {
  let remainingAmount = amount;
  let array = [];

  for(let index = 0; index < denomination.length; index++) {
    let result = Math.floor(remainingAmount / denomination[index]);
    array.push(result);
    remainingAmount = remainingAmount % denomination[index];
  }

  return array;
}

const joinArrayAsObj = function(sortedDenomination, array) {
  const coinsObj = {};

  for(let index = 0; index < sortedDenomination.length; index++ ) {
    coinsObj[sortedDenomination[index]] = array[index];
  }

  return coinsObj;
}

const main = function(amount, denomination) {
  const sortedDenomination = maxSort(denomination);
  const coinsArray = calculateNoOfCoins(amount, sortedDenomination);
  const coinsObj = joinArrayAsObj(sortedDenomination, coinsArray);
  //console.log(coinsObj);
  return coinsObj;
}

//jconsole.log(main(0,[1]));



exports.calculateNoOfCoins = calculateNoOfCoins;
exports.maxSort = maxSort;
exports.maxOf = maxOf;
exports.main = main;
