//allConstruct(target, wordBank)
//returns a 2D array containing all of the ways that the target can be constructed by concatenating elements of the wordBank array; [[],[],[],[],...]  each element is a combination that forms target

function allConstruct(target, wordBank, memo={}) {
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    let listOfCombinations = [];
    for(let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const restOfWord = target.substr(word.length);
            const recursiveCallResult = allConstruct(restOfWord, wordBank, memo);
            const finalResult = recursiveCallResult.map(result => [word, ...result]);
            listOfCombinations.push(...finalResult);
        }
    }
    memo[target] = listOfCombinations;
    return listOfCombinations;
}

//(memoization doesn't do anything of the worst case scenario):
//Time: O(n^m)
//Space: O(m)

console.log(allConstruct('hello', ['hell','o','hel','he','hello','lo']))
//[
// ['hello'] ,
// ['hell', 'o']
// ['hel', 'lo']
//]
console.log(allConstruct('purple', ['purp','p','ur','le','purpl']))
//[
// ['purp','le'] ,
// ['p','ur','p','le']
//]
console.log(allConstruct('abcdef', ['ab','abc','cd','def','abcd','ef','c']))
//[
// ['ab','cd','ef'] ,
// ['ab','c','def'] ,
// ['abc','def'] ,
// ['abcd','ef'] ,
//]
console.log(allConstruct('skateboard', ['bo','rd','ate','t','ska','sk','boar']))
//[]
console.log(allConstruct('aaaaaaaaaaaaaaaaaaaaa', ['a','aa','aaa','aaaa','aaaaa'])) //[]










