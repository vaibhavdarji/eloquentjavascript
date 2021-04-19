/**
 * Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. 
 * Neither may use the standard reverse method.
 */


const reverseArray = array => {
    const result = [];

    for (let i = array.length - 1;i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
};

const reverseArrayInPlace = array => {
    let length = array.length;
    let output = [...array];
    for (let i = 0; i < Math.floor(length / 2); i++) {
        output[i] = output[output.length - 1 - i];
        output[length - 1 - i] = array[i];
    }
  return output;
};

reverseArray(["A", "B", "C"]);
reverseArrayInPlace([1,2,3,4,5]);