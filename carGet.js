let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    getInfo() {
        for (const key in this) {
            console.log(key, ':', this[key]);
        }
    }
};

car.getInfo();
car.color = 'Red';
car.getInfo();
