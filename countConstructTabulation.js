function countConstructTabulation(targetStr, wordBank) {
    const table = Array(targetStr.length + 1).fill(0);
    table[0] = 1;
    for (let i = 0; i <= targetStr.length; i++) {
        for(let word of wordBank) {
            if (targetStr.slice(i, i + word.length) === word) {
                if (table[i + word.length] <= table.length - 1) table[i + word.length] += table[i];
            }
        }
    }
    return table[targetStr.length];
}

console.log(countConstructTabulation('abcdef', ['ab','abc','cd','defg','abcd']))  //0
console.log(countConstructTabulation('abcdef', ['ab','abc','cd','def','abcd']))  //1
console.log(countConstructTabulation('abcdef', ['ab','abc','cd','def','abcd', 'cdef']))  //2
console.log(countConstructTabulation('abcdef', ['ab','abc','cd','ef','def','abcd', 'cdef']))  //4
console.log(countConstructTabulation('abcdef', ['ab','abc','cd','ef','def','abcd', 'cdef', 'a', 'b']))  //6
console.log(countConstructTabulation('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeg', ['e','ab','abc','cd','ef','def','abcd', 'cdef', 'a', 'b']))  //0
console.log(countConstructTabulation('eeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeg', ['e','ab','abc','cd','ef','def','abcd', 'cdef', 'a','g', 'b']))  //1


console.log(countConstructTabulation('alimony', ['ali','mony','ate','boar','t']))  //true
console.log(countConstructTabulation('alimony', ['al','mony','i','boar','t']))  //true
console.log(countConstructTabulation('alimony', ['al','mon','i','boar','y']))  //true
console.log(countConstructTabulation('alimony', ['al','mon','i','boar','t']))  //false
console.log(countConstructTabulation('skateboard', ['ska','sk','ate','boar','t']))  //false
console.log(countConstructTabulation('skateboard', ['ska','sk','ate','boar','t']))  //false
console.log(countConstructTabulation('skateboard', ['ska','sk','ate','boar','t','k','c','d','f','skatebo']))  //true

console.log(countConstructTabulation('purple', ['purp','p','ur','le','purpl']))  //2
console.log(countConstructTabulation('abcdef', ['ab','abc','cd','def','abcd']))  //1
console.log(countConstructTabulation('enterapotentpot', ['a','p','ent','enter','ot', 'o', 't']))  //4