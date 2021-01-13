function canSumTabulation(targetSum, numberArray) {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < numberArray.length; j++) {
            const number = numberArray[j];
            if (table[i] === true && i + number < table.length) table[i + number] = true;
        }
    }
    return table[targetSum]
}

//Time: O(n*m)
//Space: 0(m)

console.log(canSumTabulation(7, [2,3]))  //true;
console.log(canSumTabulation(7, [5,3,4,7]))  //true;
console.log(canSumTabulation(7, [2,4]))  //false;
console.log(canSumTabulation(8, [2,3,5]))  //true;
console.log(canSumTabulation(300, [7,14]))  //false; 