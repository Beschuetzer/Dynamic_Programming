//Not memoized:
function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(3));
console.log(fib(5));
console.log(fib(8));
// console.log(fib(50));        //this one takes way too long due to repeated calculations

//use memoization to solve by caching calculations and making them available to all recursive calls via a 'memo' object
function fibMemo(n, memo={}) {
    if (n<=2) return 1;
    if (n in memo) return memo[n];
    memo[n] = fibMemo(n - 2, memo) + fibMemo(n - 1, memo);
    return memo[n];
}

console.log(fibMemo(3));
console.log(fibMemo(5));
console.log(fibMemo(8));
console.log(fibMemo(1000));