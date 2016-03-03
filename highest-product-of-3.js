// https://www.interviewcake.com/question/javascript/highest-product-of-3

'use strict';

var arrayOfInts = [2, 3, 6, 1, 12, 8];

function highestProduct(arr) {
  const highest3 = [];
  const a = arr.slice();
  for (let i = 0; i < 3; i++) {
    const high = highest(a);
    a.splice(a.indexOf(high), 1);
    highest3.push(high);
  }

  console.log(highest3);
  return highest3[0] * highest3[1] * highest3[2];
}

function highest(arr) {
  return Math.max(...arr);
}

// Wrong, doesn't work with negative numbers.
console.log(highestProduct(arrayOfInts));