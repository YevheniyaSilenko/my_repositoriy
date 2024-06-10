var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    price() {
      let totalPrice = 0;
      for (const key in this) {
        if (typeof this[key] !== "function") {
          totalPrice += parseFloat(this[key].split(' ')[0]);
        }
      }
      return totalPrice;
    },
    getMinPrice() {
      let minPrice;
      for (const minPriceKey in this) {
        minPrice = parseInt(this[minPriceKey]);
        break;
      }
      for (const key in this) {
        if (parseInt(this[key]) < minPrice && typeof this[key] !== "function") {
          minPrice = parseInt(this[key]);
        }
      }
      return minPrice;
    },
    getMaxPrice() {
      let maxPrice;
      for (const maxPriceKey in this) {
        maxPrice = parseInt(this[maxPriceKey]);
        break;
      }
      for (const key in this) {
        if (parseInt(this[key]) > maxPrice && typeof this[key] !== "function") {
          maxPrice = parseInt(this[key]);
        }
      }
      return maxPrice;
    }
  };
  // Добавление услуги "Розбити скло"
    services['Розбити скло'] = "200 грн";

  console.log("Total Price:", services.price());
  console.log("Minimum Price:", services.getMinPrice());
  console.log("Maximum Price:", services.getMaxPrice());
  