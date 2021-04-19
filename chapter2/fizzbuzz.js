/*
    Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
    For numbers divisible by 3, print "Fizz" instead of the number, 
    and for numbers divisible by 5 (and not 3), print "Buzz" instead.
*/


let fizzBuzz = (number = 100) => {
    for (let i = 1; i <= number; i++) {
        let output = ''
        if (!(i % 3)) output += "Fizz";
        if (!(i % 5)) output += "Buzz";

        console.log(output || i);
    }
}


// smallest using ternary
fizzBuzz = (number = 100) => {
    for(i=0;i <number;) {
        console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i);
    }
}

