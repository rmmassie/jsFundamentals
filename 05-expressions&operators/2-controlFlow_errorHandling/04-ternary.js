/**
 * Ternary is a shorthand If Else.. Statement
 * basic 'If' can't be employed. Must be an If Else
 */

// let num = 6;

// // Ternary
// /* Condition to meet */(num > 0) ? /* What to do if True - */console.log('Yes') : /* What to do if True - */console.log('No');


// // If Else
// if (num > 0) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }

// let num = 4;

// (num == 0) ? console.log('Working'):console.log('Not Working');

let age = 35

age < 18 ? console.log('You can\'t do anything.'):
age >= 18 && age < 21 ? console.log('You can vote.'): 
age >= 21 && age < 25 ? console.log('You can vote and drink.'):
console.log('You can vote and drink and rent a car.')
