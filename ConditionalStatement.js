const age = 50;
// else-if ladder
// if (age < 18) //-->true
// {
//     console.log("Not Valid voter");
// }
// else if (age > 80) {
//     console.log("Chalat jata yet nahi");
// }
// else {
//     console.log("Valid voter");
// }

// nested if

// if (age > 15) {
//     if (age < 20) {
//         console.log("Valid user");
//         if (condition) {

//         }
//     } else {
//         console.log("Age is less than 20 but greater than 15");
//     }
// } else {
//     console.log("Not valid user");
// }


// switch case

// const dayNumber = 3;


// switch (dayNumber) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Thursday");
//         break;
//     case 4:
//         console.log("Friday");
//         break;
//     case 5:
//         console.log("Saturday");
//         break;
//     case 6:
//         console.log("Sunday");
//         break;
//     case 7:
//         console.log("Wednesday");
//         break;

//     default:
//         console.log("Invalid input");
//         break;
// }



// const values = 1;
// switch (values) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log("Valid number");
//         break;
//     case 5:
//     case 6:
//     case 7:
//         console.log("VIP number");
//         break;
//     default:
//         console.log("Wrong number");
//         break;
// }


// unary --> a-- , +a
// binary --> a + b
// ternary --> ?:


const validSpeed = 80;
const printValue = (validSpeed > 100) ? console.log("Overspeed") : console.log("Its okay speed");
console.log(printValue);