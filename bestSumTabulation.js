function bestSumTabulation(targetSum, numbersArray) {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        const currentCell = table[i];
        for(let number of numbersArray) {
            const cellInQuestion = table[i+number];
            if (currentCell !== null && i + number <= targetSum) {
                const currentCombination = [...currentCell, number];
                if (Array.isArray(currentCell)) {
                    if (cellInQuestion === null || currentCombination.length < cellInQuestion.length) table[i+number] = currentCombination;
                }
                else table[i+number] = currentCombination;
            }
        }
    }
    return table[targetSum];
}

console.log(bestSumTabulation(7, [5,3,4,7])) //[7]
console.log(bestSumTabulation(8, [2,3,5])) //[3,5]
console.log(bestSumTabulation(8, [1,4,5])) //[4,4]
console.log(bestSumTabulation(100, [1,2,5,25, 45])) //[25,25,25,25]
console.log(bestSumTabulation(100, [45,25,5,2,1])) //[25,25,25,25]