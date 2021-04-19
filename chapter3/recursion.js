/**
 * Define a recursive function isEven corresponding to this description.
 * The function should accept a single parameter (a positive, whole number) and return a Boolean.
 */

let isEven = number => {
    if (!Number.isInteger(number)) return false;
    return number %2 === 0;
};

isEven(50);
isEven(75);
isEven(-1);