// https://www.interviewcake.com/question/javascript/nth-fibonacci

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n-1) + fib(n-2); // not efficient
}


console.log(fib(7)); // 13
console.log(fib(8)); // 21