//Combinatoric Problem
//m = targetSum
//n = number.length

//Brute Force:
//time: O(n^m)
//space: O(m)

//Memoized version:
//time: O(n*m)
//space: O(m)

//write a fn canSum(targetSum, numberArray) that takes in a targetSum and an array of numbers and returns a boolean indicating whether or not it is possible to create the targetSum using any combination of the number any number of times.  All inputs are assumed to be non-negative 
function canSum(targetSum, numbers) {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const nextTargetResult = canSum(remainder, numbers);
        if (nextTargetResult === true) {
            return true;
        }
    }
    return false;
}

console.log(canSum(7, [2,3]))  //true;
console.log(canSum(7, [5,3,4,7]))  //true;
console.log(canSum(7, [2,4]))  //false;
console.log(canSum(8, [2,3,5]))  //true;
// console.log(canSum(300, [7,14]))  //false;


function canSumMemo(targetSum, numbers, memo={}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSumMemo(remainder, numbers, memo) === true) {
            memo[remainder] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
}

console.log(canSumMemo(7, [2,3]))  //true;
console.log(canSumMemo(7, [5,3,4,7]))  //true;
console.log(canSumMemo(7, [2,4]))  //false;
console.log(canSumMemo(8, [2,3,5]))  //true;
console.log(canSumMemo(300, [7,14]))  //false;

for (let num in {1: 'one', 2: 'two'}) {
    console.log(num);
}

