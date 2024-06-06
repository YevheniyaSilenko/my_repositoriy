function pad(string, symbol, count, isBeginning) {
    if (count > string.length) {
        return (isBeginning) ? symbol.repeat(count - string.length).concat(string) : string.concat(symbol.repeat(count - string.length));
    } else {
        return string;
    }
}

function padStart(string, symbol, count) {
    return pad(string, symbol, count, true);
}

function padEnd(string, symbol, count) {
    return pad(string, symbol, count, false);
}

console.log(padStart('qwerty', '*', 10));
console.log(padEnd('qwerty', '+', 10));
console.log(padStart('qwerty', '*', 2));

