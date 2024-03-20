const findTheOldest = function(persons) {
    let highest_age = 0;
    let longest_life_person;
    const d = new Date();
    const year = d.getFullYear();
    persons.forEach(element => {
        if ('yearOfDeath' in element) {
            age = element.yearOfDeath - element.yearOfBirth;
        } else {
            age = year - element.yearOfBirth;
        }
        if (age > highest_age) {
            longest_life_person = element;
            highest_age = age;
        }
    });
    return longest_life_person;
};

// Do not edit below this line
module.exports = findTheOldest;
