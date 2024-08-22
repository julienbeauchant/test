function min (a, b){
    if (a < b){
        return(a)
    } else {
        return(b)
    }
};

// Tests
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

// si a est < b alors a est retourné, sinon b
