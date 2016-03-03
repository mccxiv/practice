
// https://www.interviewcake.com/question/python/stock-price

const stock_prices_yesterday = [10, 7, 5, 8, 11, 9];

console.log(get_max_profit(stock_prices_yesterday));


function get_max_profit(arr) {
  const lowestI = arr.indexOf(lowest(arr));
  const restOfArr = arr.slice(lowestI+1);
  const highestI = arr.indexOf(highest(restOfArr));

  return arr[highestI] - arr[lowestI];
}

function lowest(arr) {
  return arr.slice().sort((a, b) => a - b)[0];
}

function highest(arr) {
  return arr.slice().sort((a, b) => b - a)[0];
}