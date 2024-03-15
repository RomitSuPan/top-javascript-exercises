const add = function(num1, num2) {
	return ((num1) + (num2));
};

const subtract = function(num1, num2) {
  return ((num1) - (num2));
};

const sum = function(numArray) {
	let sum = 0;
  numArray.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(numArray) {
	product = 1;
  numArray.forEach(element => {
    product = product * element;
  });
  return product;
};

const power = function(num1, num2) {
  return ((num1) ** (num2));
};

const factorial = function(num1) {
  let result = 1;
  for (let i = 1; i <= num1 ; i++) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
