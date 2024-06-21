var arr = [
    {
        userName: "Test", 
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro", 
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii", 
        lastName: "",
        email: "andrii@mail.ru"
    },
];

let reg = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

function getArrayWithCorrectEmails(arr, regex) {
    let arrayWithEmails = [];
    arr.forEach(function (currentValue) {
        for (const key in currentValue) {
            if (key === 'email')
                arrayWithEmails.push(currentValue[key]);
        }
    });
    return arrayWithEmails.filter(function (email) {
        return regex.test(email);
    });
}

let newArr = getArrayWithCorrectEmails(arr, reg);
console.log(newArr);
