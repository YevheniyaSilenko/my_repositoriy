// Зчитуємо число через prompt
let age = prompt("Введіть кількість років:");

// Перевіряємо, чи введено число і чи не є воно від'ємним
if (isNaN(age) || age < 0) {
    alert("Будь ласка, введіть коректне невід'ємне число.");
} else {
    // Приводимо введене значення до цілого числа
    age = parseInt(age);

    // Визначаємо правильну форму слова
    let word;
    if (age % 10 === 1 && age % 100 !== 11) {
        word = "рік";
    } else if ((age % 10 >= 2 && age % 10 <= 4) && !(age % 100 >= 12 && age % 100 <= 14)) {
        word = "роки";
    } else {
        word = "років";
    }

    // Виводимо результат
    alert(`${age} ${word}`);
}
