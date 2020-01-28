/*
    Challenge:
    Set 7 (or 8) variables:
    firstName
    lastName
    houseNumber
    aptNumber (if applicable)
    street
    city
    state
    zipcode
    Set each variable to its respective type.
    console.log your whole address (with a space between variables).
*/

let firstName = 'Matt';
let lastName = 'Massie';
let houseNumber = 10051;
let street = 'Southport Rd.';
let city = 'Indianapolis';
let state = 'IN';
let zipcode = 46259;

console.log(lastName + ', ' + firstName);
console.log(houseNumber, street);
console.log(city + ', ' + state, zipcode);

console.log(firstName, lastName, houseNumber, street, city, state, zipcode);

/*
String Properties
Properties are qualities associated with a specific datatype.
Strings have properties or qualities that only they can deal with.

*/
let myInfo = firstName + ' ' + lastName;
console.log(myInfo.length);

/**
 * String Methods: Tools we can use on a string.
 */

 console.log(myInfo.includes('ass'))

 let sent = 'this sentence will be split into individual parts';
 let sentArray = (sent.split(' '));
 console.log(sentArray);