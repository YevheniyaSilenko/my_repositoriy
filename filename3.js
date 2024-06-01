function drawTriangle(height, symbol) {
    for (let i = 1; i <= height; i++) {
        console.log(symbol.repeat(i));
    }
}

// Приклад виклику функції
drawTriangle(5, '*');


function drawTriangle(height, symbol) {
    let i = 1;
    while (i <= height) {
        console.log(symbol.repeat(i));
        i++;
    }
}

// Приклад виклику функції
drawTriangle(5, '*');
