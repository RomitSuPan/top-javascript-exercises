const removeFromArray = function(...array_and_values_to_remove) {
    original_array = array_and_values_to_remove[0];
    values_to_remove = array_and_values_to_remove.slice(1);
    console.log(original_array);
    console.log(values_to_remove);
   
    filtered_array = []

    for (let i = 0; i < original_array.length ; i++) {
        if (!values_to_remove.includes(original_array[i])) {
            filtered_array.push(original_array[i]);
        }
    }

    return filtered_array;
};

// Do not edit below this line
module.exports = removeFromArray;
