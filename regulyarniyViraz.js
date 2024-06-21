// Регулярний вираз для перевірки рядка
const regex = /^(?=.{6,})(?!.*[Aa]).*$/;

// Тестові рядки
const testStrings = [
    "example", // підходить
    "ExAmple", // не підходить
    "abcdef",  // підходить
    "123456",  // підходить
    "AAAAAA",  // не підходить
    "123Aa6",  // не підходить
];

// Функція для перевірки рядків
testStrings.forEach(str => {
    if (regex.test(str)) {
        console.log(`"${str}" підходить!`);
    } else {
        console.log(`"${str}" не підходить.`);
    }
});


