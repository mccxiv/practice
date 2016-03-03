// https://www.interviewcake.com/question/javascript/inflight-entertainment

'use strict';

function haveMovieMatch(flightLength, movieLenghts) {
  let match = false;
  movieLenghts.forEach((currMovieLength, i1) => {
    movieLenghts.forEach((otherMovieLength, i2) => {
      if (i1 !== i2 && currMovieLength + otherMovieLength === flightLength) {
        match = true;
      }
    })
  });
  return match;
}

const movies = [7, 3, 5, 7, 4, 4, 21];
const flight = 6;

console.log(haveMovieMatch(flight, movies));
