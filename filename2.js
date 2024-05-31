 // Запит на введення року через prompt
        var yearInput = prompt("Введіть рік:");

        // Перевірка, чи введено число та чи воно не є від'ємним
        if (!isNaN(yearInput) && yearInput >= 0) {
            // Перетворення на число
            var year = parseInt(yearInput);

            // Перевірка на правильність форми слова "рік"
            if (year === 1) {
                alert(year + " рік");
            } else if (year > 1 && year < 5) {
                alert(year + " роки");
            } else {
                alert(year + " років");
            }
        } else {
            alert("Будь ласка, введіть додатне число.");
        }
