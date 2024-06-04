function multiply(a, b) {
    let result = 0;
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
}

function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result = multiply(result, x);
    }
    return result;
}

console.log(pow(2, 3));
