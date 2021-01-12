//the 0th number of the sequence is 0
//the 1st number of the sequence is 1


function fibTab(n) {    
    const table = new Array(n+1).fill(0);
    table[1] = 1;

    //this is how i thought to iterate
    for (let i = 0; i < table.length; i++) {
        if (i + 1 < table.length) table[i+1] += table[i];
        if (i + 2 < table.length) table[i+2] += table[i];
    }
    console.log('table.length =', table.length);
    //this is the example given
    // for (let i = 0; i <= n; i++) {
    //     table[i+1] += table[i];
    //     table[i+2] += table[i];
    // }
    console.log('table =', table);
    return table[n];
}



console.log(fibTab(6)) //8
console.log(fibTab(7)) //13
console.log(fibTab(8)) //21
console.log(fibTab(50)) //12586269025