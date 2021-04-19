/**
 * Write a function countBs that takes a string as its only argument and returns a number that 
 * indicates how many uppercase “B” characters there are in the string.
 * 
 * Next, write a function called countChar that behaves like countBs, 
 * except it takes a second argument that indicates the character that 
 * is to be counted (rather than counting only uppercase “B” characters). 
 * Rewrite countBs to make use of this new function.
 */



let countChar = (string, character) =>  {
    const regex = new RegExp(character, "g");
    return string.length - string.replace(regex, "").length
};

const countBs = string => countChar(string, "B");

countBs("BBC"); // should return 2
countChar("kakkerlak", "k"); //should return 4

// another way

countChar = (string, character) => {
    let count = 0;
    for (let i = 0;i < string.length;i++) {
        if (string.charAt(i) === character) {
            count++;
        }
    }
    return count;
};