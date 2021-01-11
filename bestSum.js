//     //Optimization Problem
// //m = targetSum
// //n = numbers.length

// //Brute Force: 
// //time: O(n^m * m) (* m comes from the remainderResult)
// //space: O(m^2)

// //Memoized:
// //time: O(m^2 * n)
// //space: O(m^2)

// //returns the shortest array of numbers adding up to targetSum (can return any one if there are ties)

// function bestSum (targetSum, numbers) {
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;

//     let shortestResult = null;
//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         const remainderResult = bestSum(remainder, numbers);
//         if (remainderResult !== null) {
//             remainderResult.push(num);
//             if (shortestResult === null || remainderResult.length < shortestResult.length) {
//                 shortestResult = remainderResult;
//             }
//         }
//     }
//     return shortestResult;
// }

// console.log(bestSum(7, [5,3,4,7]))  //[7]
// console.log(bestSum(7, [2,3,5]))  //[2,5]
// console.log(bestSum(8, [1,4,5]))  //[4,4];
// console.log(bestSum(8, [2,3,5]))  //[3,5];
// // console.log(bestSum(100, [1,2,5,25]))  //false;

// function bestSumMemo (targetSum, numbers, memo={}) {
//     if (targetSum === 0) return [];
//     if (targetSum < 0) return null;
//     if (targetSum in memo) return memo[targetSum];

//     let shortestResult = null;
//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         const remainderResult = bestSumMemo(remainder, numbers, memo);
//         if (remainderResult !== null) {
//             // remainderResult.push(num);
//             const newArray = [...remainderResult, num];
//             if (shortestResult === null || newArray.length < shortestResult.length) {
//                 shortestResult = newArray;
//             }
//         }
//     }
//     memo[targetSum] = shortestResult;
//     return memo[targetSum];
// }

// console.log(bestSumMemo(7, [5,3,4,7]))  //[7]
// console.log(bestSumMemo(7, [2,3,5]))  //[2,5]
// console.log(bestSumMemo(8, [1,4,5]))  //[4,4];
// console.log(bestSumMemo(8, [2,3,5]))  //[3,5];
// console.log(bestSumMemo(100231, [1,2,5,25]))  //false;



function bestSumReview(targetSum, numArray, memo={}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestResult = null;
    for(let num of numArray) {
        const remainder = targetSum - num;
        const remainderResult = bestSumReview(remainder, numArray, memo);
        if (remainderResult !== null) {
            //stuff to do
            const result = [...remainderResult, num];
            if (shortestResult === null || result.length < shortestResult.length) shortestResult = result;
        }
    }
    memo[targetSum] = shortestResult;
    return memo[targetSum];
}



console.log(bestSumReview(7, [5,3,4,7]))  //[7]
console.log(bestSumReview(7, [2,3,5]))  //[2,5]
console.log(bestSumReview(8, [1,4,5]))  //[4,4];
console.log(bestSumReview(8, [2,3,5]))  //[3,5];
console.log(bestSumReview(10000, [1,2,5,25]))  //false;

