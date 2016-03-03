const nums = [1, 7, 3, 4];

function getProductsOfAllIntsExceptAtIndex(arr) {
  return arr.map((a, i) => {
    console.log('--- Reducing');
    return arr.reduce((prev, curr, currIndex) => {
      console.log(currIndex !== i? prev * curr : 1);
      return currIndex !== i? prev * curr : prev * 1;
    }, 1);
  });
}

console.log(getProductsOfAllIntsExceptAtIndex(nums));