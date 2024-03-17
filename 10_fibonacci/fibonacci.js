const fibonacci = function(number) {
    num1 = 1;
    num2 = 1;
    sum = 0;
    let i = 3;
    if (number < 0) {
        return "OOPS";
    }
    else if (number == 0) {
        return 0;
    }
    else if (number < 3) {
        return 1;
    }
    else if (number >= 3) {
        while (i <= number) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
            i++;
            console.log(sum);
        }
        return sum;
    }
};

// fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
