// https://www.interviewcake.com/question/javascript/temperature-tracker

'use strict';

function TempTracker() {
  return {
    temps: [],
    insert: (temp) => this.temps.push(temp),
    getMax: () => Math.max(...this.temps),
  }
}
