const { lowerCase } = require("case-anything");

const sumAll = function(val_1, val_2) {
    if ((val_1 >= 0 && Number.isInteger(val_1)) && (val_2 >= 0 && Number.isInteger(val_2))) {
        if (val_1 <= val_2) {
            lower_limit = val_1;
            upper_limit = val_2;
        } else {
            lower_limit = val_2;
            upper_limit = val_1; 
        }
        sum = 0;
        for (let i = lower_limit; i <= upper_limit; i++) {
            sum += i;
        }
        return sum;
    }
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
