function howSumTabulation(targetSum, numbersArray) {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++) {
        const current = table[i];
        if (current !== null) {
            for (let j = 0; j < numbersArray.length; j++) {
                const number = numbersArray[j];
                    if (i+number <= targetSum) table[i+number] = [...current, number];
            }
        }
    }
    return table[targetSum];
}

//Space: O(m^2*n)
//Time: O(m^2)

console.log(howSumTabulation(7, [2,3]))  //[3,2,2]
console.log(howSumTabulation(7, [5,3,4,7]))  //[4,3];
console.log(howSumTabulation(7, [2,4]))  //null;
console.log(howSumTabulation(8, [2,3,5]))  //[2,2,2,2]];
console.log(howSumTabulation(3000, [17,13]))  //[2,2,2,2]];
console.log(howSumTabulation(38980, [9,7,14,22,23,25]))  //maximum;