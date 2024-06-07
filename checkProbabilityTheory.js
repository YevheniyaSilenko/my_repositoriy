function checkProbabilityTheory(count) {
    let even = 0, odd = 0;

    for (let i = 0; i < count; i++) {
        let randomNumber = Math.floor(Math.random() * 901) + 100;
        randomNumber % 2 === 0 ? even++ : odd++;
    }

    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${even}`);
    console.log(`Непарних чисел: ${odd}`);
    console.log(`Відсоток парних до непарних: ${(even / count * 100).toFixed(2)}% / ${(odd / count * 100).toFixed(2)}%`);
}


checkProbabilityTheory(52);
