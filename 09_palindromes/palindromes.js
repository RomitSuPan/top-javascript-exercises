const palindromes = function (original_str) {
    original_str = original_str.replace(/[^a-zA-Z0-9]/g, '');
    original_array = original_str.toLowerCase().replaceAll(' ', '').split("");
    original_str = original_array.toString();
    reversed_str = original_array.toReversed().toString();
    if (original_str === reversed_str) {
        return true;
    } else {
        return false;
    }
};
palindromes('Racecar!')
// Do not edit below this line
module.exports = palindromes;