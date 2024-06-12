function myBlend(arr) {
    let arrNumber;
    for (let i = 0; i < arr.length; i++) {
        let randomNumber = Math.floor(Math.random() * (arr.length - i)) + i;
        arrNumber = arr[randomNumber];
        arr[randomNumber] = arr[i];
        arr[i] = arrNumber;
    }
    return arr;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myBlend(array);
console.log(array);
