//Write a function min that takes two arguments and returns their minimum.


// compare both numbers and return the smallest number
const findMinimum = (number1, number2) => number1 < number2 ? number1 : number2;

console.log(findMinimum(0, 10));

// using Math min function to return smallest
const smallestNumber = (number1, number2) => Math.min(number1, number2);

/**
 * function can take as many numbers
 * use arguments iterator to convert number of arguments to array
 * use array reduce method compare number and return the smallest with each comparison
 * @returns number
 */
function getMinimum() {
    const array = Array.from(arguments);
    return Array.from(array).reduce(
        (min, current) => min < current ? min : current,
        array[0]
    );
}

getMinimum(0, 10, 50,-10,-50,-99.9, -99.5, -49.9);