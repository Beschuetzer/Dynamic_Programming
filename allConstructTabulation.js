function allConstructionTabulation(targetStr, wordBank) {

}



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