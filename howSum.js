//Decision Problem
//m = targetSum
//n = number.length
//
//Brute Force:
//time: O(n^m * m (from the ...remainderResult array copying part))
//space: O(2m)


//Memoized version:
//time: O(n*m^2)
//space: O(m^2)

//returns an array that contains a combination of numbers from numbers that add up to the targetSum, ff it exists otherwise return null.  May return any combination (not the smallest or longest one)

function howSum2(targetSum, numbers, memo={}) {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    if (targetSum in memo) return memo[targetSum];

    for (let num of numbers) {
        const nextTargetSum = targetSum - num;
        const nextTargetSumResult = howSum2(nextTargetSum, numbers, memo);
        if (nextTargetSumResult !== null) {
            // nextTargetSumResult.push(num); //pushing doesn't work correctly when doing bestSum
            // memo[nextTargetSum] = nextTargetSumResult
            memo[nextTargetSum] = [...nextTargetSumResult, num];
            return memo[nextTargetSum];
        }
    }
    memo[targetSum] = null;
    return memo[targetSum];
}

console.log(howSum2(7, [2,3]))  //[3,2,2]
console.log(howSum2(7, [5,3,4,7]))  //[4,3];
console.log(howSum2(7, [2,4]))  //null;
console.log(howSum2(8, [2,3,5]))  //[2,2,2,2]];
console.log(howSum2(3000, [17,13]))  //[2,2,2,2]];
// console.log(howSum2(38980, [9,7,14,22,23,25]))  //maximum;


function howSum(targetSum, numbers, memo={}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    for (let num of numbers) {
        const remainder = targetSum - num;

        //result could be null of an array
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[remainder] = [ ...remainderResult, num];
            return memo[remainder]
        }
    }
    memo[targetSum] = null;
    return null;
}



console.log(howSum(7, [2,3]))  //[3,2,2]
console.log(howSum(7, [5,3,4,7]))  //[4,3];
console.log(howSum(7, [2,4]))  //null;
console.log(howSum(8, [2,3,5]))  //[2,2,2,2]];
console.log(howSum(3000, [17,13]))  //[2,2,2,2]];
console.log(howSum(38979, [25,23,22,14,9,7]))  //maximum;