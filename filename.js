// 'number' + 3 + 3
// Операція виконується зліва направо.
// Спочатку 'number' + 3 = 'number3', а потім 'number3' + 3 = 'number33'.
console.log('number' + 3 + 3); // 'number33'

// null + 3
// null перетворюється в 0, тому 0 + 3 = 3.
console.log(null + 3); // 3

// 5 && "qwerty"
// Оператор && повертає перший хибний операнд або останній істинний.
// 5 є істинним, тому повертається "qwerty".
console.log(5 && "qwerty"); // "qwerty"

// +'40' + +'2' + "hillel";
// Унарний + перетворює строки '40' і '2' в числа 40 і 2.
// 40 + 2 = 42, і далі 42 + "hillel" = '42hillel'.
console.log(+'40' + +'2' + "hillel"); // '42hillel'

// '10' - 5 === 6;
// '10' перетворюється в число 10, 10 - 5 = 5.
// 5 === 6 є false.
console.log('10' - 5 === 6); // false

// true + false
// true перетворюється в 1, а false в 0.
// 1 + 0 = 1.
console.log(true + false); // 1

// '4px' - 3
// '4px' не може бути перетворене в число, тому результат NaN.
console.log('4px' - 3); // NaN

// '4' - 3
// '4' перетворюється в число 4, 4 - 3 = 1.
console.log('4' - 3); // 1

// '6' + 3 ** 0;
// 3 ** 0 = 1, і '6' + 1 = '61'.
console.log('6' + 3 ** 0); // '61'

// 12 / '6'
// '6' перетворюється в число 6, 12 / 6 = 2.
console.log(12 / '6'); // 2

// '10' + (5 === 6);
// 5 === 6 є false, що перетворюється в 'false' у конкатенації.
// '10' + 'false' = '10false'.
console.log('10' + (5 === 6)); // '10false'

// null == ''
// null не рівне '', тому результат false.
console.log(null == ''); // false

// 3 ** (9 / 3);
// 9 / 3 = 3, і 3 ** 3 = 27.
console.log(3 ** (9 / 3)); // 27

// !!'false' == !!'true'
// Обидва вирази !!'false' і !!'true' є true, тому true == true.
console.log(!!'false' == !!'true'); // true

// 0 || '0' && 1
// 0 є хибним, тому обчислюється '0' && 1.
// '0' є істинним, тому результатом є 1.
console.log(0 || '0' && 1); // 1

// (+null == false) < 1;
// +null перетворюється в 0, 0 == false є true, true < 1 є true.
console.log((+null == false) < 1); // true

// false && true || true
// false && true є false, false || true є true.
console.log(false && true || true); // true

// false && (false || true);
// false || true є true, але false && true є false.
console.log(false && (false || true)); // false

// (+null == false) < 1 ** 5;
// +null перетворюється в 0, 0 == false є true, 1 ** 5 = 1, true < 1 є true.
console.log((+null == false) < 1 ** 5); // true
