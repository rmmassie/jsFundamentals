/*
    a variable is a named container for storing data
    we name variables so that we can refer to them again
*/

// Declarations can be let, var & const
let a = 2;
let b = 1;

/*
    let = keyword
    b = variable name
    = = assignment operator
    1 = value    
*/

console.log(a + b );

/*
Variables must begin with letter, $ or _
Number can be user after the first character, but they can't come first.
JS is case sensitive
no spaces allowed in variable names
camelCase is best practice for readability
*/ 

let thisIsMyVariable = 'Test';

/*
    var - 'old' keyword for variables
    let - 'new' keyword, ES6
    const - immutable variable. Can't be changed once set
 */

/*
    declarations vs initilization
    declarations are the LEFT side of the operator
    LET X

    initializations are on the right side of the operator.
    'Test', e.g. 
    sets the value of the variable
*/

let x;

console.log('Declaration:', x);

x = 100

console.log(x);

let y = 'hello';
console.log(x, y);

// const today = 1;
// // Throws an error, Assignment to cons.
// today += 1

x = 10
y = 25
console.log(x+y)

