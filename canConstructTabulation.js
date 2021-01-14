function canConstructTabulation(targetStr, wordBank) {
    const table = Array(targetStr.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= targetStr.length; i++) {
        const currentCell = table[i];
        for(let word of wordBank) {
            if (currentCell === true) {

                //example
                if (targetStr.slice(i, i + word.length) === word) {
                    if(table[i+word.length] <= targetStr.length) table[i+word.length] = true;
                }

                //my approach
                // const restOfWord = targetStr.slice(i);
                // if (restOfWord.indexOf(word) === 0) {
                //     if(table[i+word.length] <= targetStr.length) table[i+word.length] = true;
                // }
            }
        }
    }
    return table[targetStr.length];
}



console.log(canConstructTabulation('alimony', ['ali','mony','ate','boar','t']))  //true
console.log(canConstructTabulation('alimony', ['al','mony','i','boar','t']))  //true
console.log(canConstructTabulation('alimony', ['al','mon','i','boar','y']))  //true
console.log(canConstructTabulation('alimony', ['al','mon','i','boar','t']))  //false
console.log(canConstructTabulation('skateboard', ['ska','sk','ate','boar','t']))  //false
console.log(canConstructTabulation('skateboard', ['ska','sk','ate','boar','t']))  //false
console.log(canConstructTabulation('skateboard', ['ska','sk','ate','boar','t','k','c','d','f','skatebo']))  //true

console.log(canConstructTabulation('abcdef', ['ab','abc','cd','def','abcd']))  //true
console.log(canConstructTabulation('skateboard', ['bo','rd','ate','boar','t', 'ska', 'sk']))  //false
console.log(canConstructTabulation('enterapotentpot', ['a','p','ent','enter','ot', 'o', 't']))  //true
console.log(canConstructTabulation('eeeeeeeeeeeeeeeeeeeeeeeeeeeef', ['e','ee','eee','eeee','eeeee', 'eeeeee']))  //false