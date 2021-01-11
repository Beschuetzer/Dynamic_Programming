//canConstruct(targetStr, wordBank)
//returns boolean indicating whether targetStr can be constructed by concatenating elements from wordBank;  
//may use wordBank elements as many times as needed


function canConstruct(targetStr, wordBank, memo={}) {
    if (targetStr in memo) return memo[targetStr];
    if (targetStr === '') return true;

    for(let word of wordBank) {
        //if the word is a prefix of targetStr make recursive call with word
        const foundIndex = targetStr.indexOf(word);
        if (foundIndex === 0) {
            const restOfWord = targetStr.substr(word.length);
            const subcallResult = canConstruct(restOfWord, wordBank, memo);
            if (subcallResult === true) {
                memo[targetStr] = true;
                return true;
            }
        }
        //otherwise continue
        else continue;
    }

    memo[targetStr] = false;
    return memo[targetStr];
}
//n = length of wordbank
//m = length of targetStr 

//Brute Force:
//Time: O(n^m * m)  the *m comes from the .substr() method
//Space: O(m^2)  the 2nd *m comes from having to store the .substr() string for each recursive call frame

//Memoized:
//Time: O(n*m^2)    memoizing turns n^m into n*m as answers are cached
//Space: O(m^2)


console.log(canConstruct('alimony', ['ali','mony','ate','boar','t']))  //true
console.log(canConstruct('alimony', ['al','mony','i','boar','t']))  //true
console.log(canConstruct('alimony', ['al','mon','i','boar','y']))  //true
console.log(canConstruct('alimony', ['al','mon','i','boar','t']))  //false
console.log(canConstruct('skateboard', ['ska','sk','ate','boar','t']))  //false
console.log(canConstruct('skateboard', ['ska','sk','ate','boar','t']))  //false
console.log(canConstruct('skateboard', ['ska','sk','ate','boar','t','k','c','d','f','skatebo']))  //true

console.log(canConstruct('abcdef', ['ab','abc','cd','def','abcd']))  //true
console.log(canConstruct('skateboard', ['bo','rd','ate','boar','t', 'ska', 'sk']))  //false
console.log(canConstruct('enterapotentpot', ['a','p','ent','enter','ot', 'o', 't']))  //true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee','eee','eeee','eeeee', 'eeeeee']))  //false


