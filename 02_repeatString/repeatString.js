const repeatString = function(string, number_of_repetitions) {
    if (number_of_repetitions >= 1) {
        for(i = 0; i < number_of_repetitions ; i++) {
            return string.repeat(number_of_repetitions)
        }
    }
    else if(number_of_repetitions == 0){
        return ""
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
