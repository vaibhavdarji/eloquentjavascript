// 2.1 Looping a triangle

// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######


const getTriangle = (number = 7, outputString = '#') => {
    let result = outputString;

    while(result.length <= number) {
        console.log(result);
        result += '#';
    }
}   


// To print in document or update

const hashTriangle = (number = 7, outputString = '#') => {
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(outputString);
        }
        document.write('<br/>');
    }
}
