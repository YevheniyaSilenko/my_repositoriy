function pad(string, symbol, count, isBeginning) {
    if (count > string.length)
        return (isBeginning) ? symbol.repeat(count - string.length).concat(string) : string.concat(symbol.repeat(count - string.length));
    else
        return string;
}

function padEnd(string, symbol, count) {
    return pad(string, symbol, string.length + count, false);
}

function padStart(string, symbol, count) {
    return pad(string, symbol, string.length + count, true);
}

console.log(padEnd('qwerty', '*', 3)); // 'qwerty***'
console.log(padStart('qwerty', '*', 3)); // '***qwerty'
