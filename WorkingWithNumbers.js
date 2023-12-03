const price = 555;
const sellingPrice = 2536.36;
// console.log(typeof price);
// console.log(typeof sellingPrice);

// 123  integer
// 125.365 double / float


const divideByZero = 10 / 0;
// console.log(divideByZero);
// console.log(typeof divideByZero);

let result = "Hello" / 2;  // Attempting to divide a string by a number
// console.log(result);       // Output: NaN



// Built - in functions for number 

//1)toString() --> Number to string
const firstNumber = 10;
// console.log(typeof firstNumber);
// console.log(typeof firstNumber.toString());
// console.log(typeof firstNumber);

// 2) parseInt()
const a = "India";
// console.log(parseInt(a));
// console.log(typeof parseInt(a));

// 3) parseFloat()
const b = "MAH";
// console.log(parseFloat(b));
// console.log(typeof parseFloat(b));

// 4)toFixed()
const c = 1253.54;
// console.log(c.toFixed());



// Working with string

// const myString = "This is the 'JavaScript'";
// const myString = `This is the "JavaScript" and most 'weired' language`;

const userName = "JavaScript";
const rollNumber = 58;

// console.log("Username " + userName + " and roll number " + rollNumber);
// console.log(`Username ${userName} and roll number ${rollNumber}`);

// This is the 'JavaScript'
// console.log(myString);



// Built in functions for string
//1) length
const shiroli = "This is my village";
// console.log(shiroli.length);

// 2) indexOf() --> index start with 0 if char is not present return -1
// console.log(shiroli.indexOf('m'));
// console.log(shiroli.indexOf('a'));
// console.log(shiroli.indexOf('z'));
// console.log(shiroli.indexOf('i'));

// 3) lastIndexOf()
// console.log(shiroli.lastIndexOf('i'));

// 4) slice(startIndex, endIndex) -->
// startIndex (inclusive) and endIndex (exclusive)
// console.log(shiroli.slice(2, 14));
// vill vil

// 5) subStr(startPos, length)
// console.log(shiroli.substring(3, shiroli.length));

// 6) toUpperCase()
// 7) toLowerCase()
// console.log(shiroli.toUpperCase());
// console.log(shiroli.toLowerCase());

// 7) concat()
const string1 = "Hello ";
const string2 = "World";
// console.log(string1.concat(string2));

// 8) trim() --> removes white spaces of start position and of end position 
const trimmingInJs = "     This is the weired programming language     ";
// console.log(trimmingInJs.trim());

// 9) charAt()
const searching = "Its a js";
// console.log(searching.charAt(4));

// 10) split()
let str = "apple,banana,grape,orange";

// Splitting the string using a comma as the separator
// let fruits = str.split(" ");
// console.log(fruits)

let sentence = "This is a simple example of split in JavaScript";

// Splitting the sentence into an array of words using a space as the separator
let words = sentence.split(" ");

// Displaying the result
// console.log(words);







// Null and undefined
let myName = undefined;
// console.log(myName);
// console.log(typeof myName);

let jkl = null;
// console.log(jkl);
// console.log(typeof jkl);


