function IsNan(value) {
    var numberValue = Number(value);
  
    if (numberValue !== numberValue || value !== value) {
      return true;
    }
  
    return false;
  }
  
  // Тести
  console.log(IsNan(NaN)); // true
  console.log(IsNan(undefined)); // true
  console.log(IsNan({})); // true
  console.log(IsNan(true)); // false
  console.log(IsNan(null)); // false
  console.log(IsNan(37)); // false
  
  // Strings
  console.log(IsNan("37")); // false
  console.log(IsNan("37.37")); // false
  console.log(IsNan("37,5")); // true
  console.log(IsNan("123ABC")); // true
  console.log(IsNan("")); // false
  console.log(IsNan(" ")); // false
  
  // Dates
  console.log(IsNan(new Date())); // false
  console.log(IsNan(new Date().toString())); // true
  
  // Arrays
  console.log(IsNan([])); // false
  console.log(IsNan([1])); // false
  console.log(IsNan([1, 2])); // true
  