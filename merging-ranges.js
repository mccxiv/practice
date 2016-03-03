
// https://www.interviewcake.com/question/javascript/merging-ranges

'use strict';

var ranges = [ [0, 1], [3, 5], [4, 8], [10, 12], [9, 10] ];

function mergeRanges(ranges) {
  let busyTimes = [];
  const busyRanges = [];
  ranges.forEach((range) => {
    const lower = range[0];
    const upper = range[1];
    for (let i = lower; i < upper; i++) {
      if (busyTimes.indexOf(i) < 0) busyTimes.push(i);
    }
  });

  console.log(busyTimes);
  busyTimes = busyTimes.sort((a, b)=> a-b);
  console.log(busyTimes);

  let currRange = [];
  for (let i = 0; i < busyTimes.length; i++) {
    if (typeof currRange[0] === 'undefined') currRange[0] = busyTimes[i];
    if (busyTimes[i] + 1 !== busyTimes[i+1]) {
      currRange[1] = busyTimes[i] + 1;
      busyRanges.push(currRange);
      currRange = [];
    }
  }

  return busyRanges;
}

console.log(mergeRanges(ranges));