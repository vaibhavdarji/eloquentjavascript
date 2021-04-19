/**
 * Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
*/


// using Array reduce method
let flattenArray = array => array.reduce((previousArray, currentArray) => previousArray.concat(currentArray), []);

// using ES 6 spread operator

flattenArray = array => [].concat(...array);

/// using Array flat method

flattenArray = array => array.flat(Infinity);
