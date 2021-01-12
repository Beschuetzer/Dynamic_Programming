//countConstruct(targetStr, wordBank)
//returns the number of ways to construct targetStr from wordBank words; 
//can resuse words from wordBank

function countConstruct(targetStr, wordBank, memo={}) {
    if (targetStr in memo) return memo[targetStr];
    if (targetStr === '') return 1;

    let possibilities = 0;
    for(let word of wordBank) {
        if (targetStr.indexOf(word) === 0) {
            const restOfWord = targetStr.substr(word.length);
            possibilities += countConstruct(restOfWord, wordBank, memo);
        }
        
    }
    memo[targetStr] = possibilities;
    return possibilities;
}
//n = wordBank.length
//m = targetStr.length

//Brute Force:
//Time: O(n^m * m)
//Space: O(m^2)

//Memoized:
//Time: O(n*m^2)
//Space: O(m^3?)


console.log(countConstruct('abcdef', ['ab','abc','cd','defg','abcd']))  //0
console.log(countConstruct('abcdef', ['ab','abc','cd','def','abcd']))  //1
console.log(countConstruct('abcdef', ['ab','abc','cd','def','abcd', 'cdef']))  //2
console.log(countConstruct('abcdef', ['ab','abc','cd','ef','def','abcd', 'cdef']))  //4
console.log(countConstruct('abcdef', ['ab','abc','cd','ef','def','abcd', 'cdef', 'a', 'b']))  //6
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeg', ['e','ab','abc','cd','ef','def','abcd', 'cdef', 'a', 'b']))  //6


console.log(countConstruct('alimony', ['ali','mony','ate','boar','t']))  //true
console.log(countConstruct('alimony', ['al','mony','i','boar','t']))  //true
console.log(countConstruct('alimony', ['al','mon','i','boar','y']))  //true
console.log(countConstruct('alimony', ['al','mon','i','boar','t']))  //false
console.log(countConstruct('skateboard', ['ska','sk','ate','boar','t']))  //false
console.log(countConstruct('skateboard', ['ska','sk','ate','boar','t']))  //false
console.log(countConstruct('skateboard', ['ska','sk','ate','boar','t','k','c','d','f','skatebo']))  //true

console.log(countConstruct('purple', ['purp','p','ur','le','purpl']))  //2
console.log(countConstruct('abcdef', ['ab','abc','cd','def','abcd']))  //true
console.log(countConstruct('skateboard', ['bo','rd','ate','boar','t', 'ska', 'sk']))  //false
console.log(countConstruct('enterapotentpot', ['a','p','ent','enter','ot', 'o', 't']))  //true
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee','eee','eeee','eeeee', 'eeeeee']))  //false
