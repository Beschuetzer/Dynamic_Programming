//you are a traveler on a grid.  Starting from top left corener, how many ways (not the number of moves it takes) can you get to the bottom right by only moving right or down (the choice of only right or down makes this a binary tree)?  

//Dimensions of the grid are m * n (m arbitrarily represents rows and n columns)
//gridTraveler(2,3) => 3

function gridTraveler(m, n) {
    if (m === 1 || n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

console.log('gridTraveler(2,3) =', gridTraveler(2,3));
console.log('gridTraveler(5,3) =', gridTraveler(5,3));
console.log('gridTraveler(6,8) =', gridTraveler(6,8));
console.log('gridTraveler(4,5) =', gridTraveler(4,5));
// console.log('gridTraveler(7,9) =', gridTraveler(70,90))   can't compute efficiently due to the complexity being 2^n;


//reducing time complexity to n
function gridTravelerMemo(m, n, memo={}) {
    if (m === 1 || n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    
    //create a unique key for each m/n permutation, used to represent that case
    const key = `${m},${n}`;
    const keyInvers = `${n},${m}`;
    if (key in memo) return memo[key];
    if (keyInvers in memo) return memo[keyInvers];

    memo[key] = gridTravelerMemo(m - 1, n, memo) + gridTravelerMemo(m, n - 1, memo);
    return memo[key];
}

console.log('gridTravelerMemo(2,3) =', gridTravelerMemo(2,3));
console.log('gridTravelerMemo(3,3) =', gridTravelerMemo(3,3));
console.log('gridTravelerMemo(6,8) =', gridTravelerMemo(6,8));
console.log('gridTravelerMemo(4,5) =', gridTravelerMemo(4,5));
console.log('gridTravelerMemo(18,18) =', gridTravelerMemo(18,18));
console.log('gridTravelerMemo(700,90) =', gridTravelerMemo(700,90));