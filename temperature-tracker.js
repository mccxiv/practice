// https://www.interviewcake.com/question/javascript/temperature-tracker

'use strict';

function TempTracker() {
  return {
    temps: [],
    insert: function(temp) {return this.temps.push(temp)},
    getMax: function() {return Math.max(...this.temps)},
    getMin: function() {return Math.min(...this.temps)},
    getMean: function() {return this.temps.reduce((a, b) => a + b) / this.temps.length},
    getMode: function() {
      const nums = {};
      let mostAppearances = 1;

      this.temps.forEach((temp) => {
        nums[temp] = nums[temp] || 0;
        nums[temp]++;
      });

      Object.keys(nums).forEach((key) => {
        if (nums[key] > mostAppearances) mostAppearances = nums[key];
      });

      if (mostAppearances < 2) return [];
      else return Object.keys(nums).reduce((acc, key) => {
        if (nums[key] === mostAppearances) acc.push(key);
        return acc;
      }, []);
    }
  }
}

const tracker = TempTracker();

tracker.insert(3);
tracker.insert(4);
tracker.insert(4);
tracker.insert(4);
tracker.insert(72);
tracker.insert(45);
tracker.insert(23);
tracker.insert(23);
tracker.insert(23);
tracker.insert(21);
tracker.insert(20);

console.log('max', tracker.getMax());
console.log('min', tracker.getMin());
console.log('mean', tracker.getMean());
console.log('mode', tracker.getMode()); // Wrong! should only return one.
