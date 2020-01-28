/*
booleans
True or False
*/
let on = true;
console.log(true);
let off = false;
console.log(false);

/*
Null is an empty Value. Think of it like an empty container: Nothing is in it, but it still exists as a space to fill
*/
let emptyVar = null;

console.log(emptyVar);

/*
Undefined - Unlike null, it's not an empty container.
*/
let undef = undefined;
console.log(undef);
//This is undefined

let correct;

/*
 Numbers are literal.
 */

let deg = 33
console.log(deg);

let precise = 7.22e-10 + 1

console.log((precise));

/*
Strings - datatypes wrapped in double quotes.
*/

let first = 1050 + 100
let second = '1050' + '100'

console.log(first, second)

console.log(typeof(first))

//JS Implies concat if any string is present with other datatypes

/*
Ojects are complex Variables

*/
// Key Value Pairs, height is Key, 6.5 is value
let frodo = {
    height : 6.5,
    race : 'hobbit',
    cloak : true,
    ring : null,
}

console.log(frodo)

/*
Arrays
[1,2,3,4,5,6,7,8,9] Values with and assigned index starting at 0
*/

let list = [1,2,3,4,5,6,7,frodo.cloak]
console.log(list)