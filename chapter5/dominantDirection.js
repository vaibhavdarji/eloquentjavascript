/**
 * Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.
 */

const SCRIPTS = require("https://eloquentjavascript.net/code/scripts.js");

const countBy = (items, groupName) => {
    const counts = [];
    for (let i of items) { 
      let name = groupName(i); // this becomes groupName(i){return i>4}
      let known = counts.findIndex(c => c.name == name); //findIndex iterates over array "counts" using function(c){return c.name == name} which looks for object's "name" property and asks if it equals result of groupName function (true or false). If it doesn't match or the array's length is 0 it returns -1. If it matches it returns the index number of that object.
      if (known == -1) {
        counts.push({name, count: 1}); //adds new object to counts array with name equal to result of groupName function
      } else {
        counts[known].count++; //adds 1 to count property in object matching the index stored in known which resulted from findIndex
      } 
    }
    return counts; 
};

const characterScript = (code) => {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;   //Javascripts some() function iterates over the "ranges" property (which iteself is an array) in object script of array SCRIPTS. If the characterScript() input, which should be a character code produced by .codePointAt() is >= the first number and less than the second number it immediately exits and returns the script object.
      })) {
        return script;
      }
    } 
    return null;
};

const dominantDirection = text => {
    let counted = countBy(text, i => { 
        //iterates through each letter of the text and creates an array with the name "ltr", "rtl", or "ttb" or adds to the counter of said array.
        //characterScript input is Unicode of letter "i" which gets iterated over by this being inside the countBy function. It then stores the Object in script variable or returns false if there is no Object containing the input.
        let script = characterScript(i.codePointAt(0)); 
        return script ? script.direction : "none"; //Uses ternary to either return "none" which is then filtered out, or it returns the script direction (lts, rtl, or ttb) which is then output to the countBy function.
    })
    .filter(({name}) => name != "none"); 
    //filters out objects whose name property is "none"
    if (counted.length == 0) return "ltr"; //this would mean that characterScript output false or null for all characters, which means only things like !&%^%$#/.,]';   ~|?' were typed.
    //reduce iterates over the counted variable which contains arrays. It initializes with a(accumulator) as the first array. Then compares the "count" properties of that array and the next  array, and returns the greater one. Then repeats. When finished we return the array.name
    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
};


console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl