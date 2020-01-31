/**
 * - Arrays are containers that hold a list of objects.
 * denoted by [ ]
 * can hold multiple data types including other arrays, objects and simple datatypes.
 * 
 */

//Items are called by calling array[the index of the item, from 0]
 let list = ['Orange', 'Banana', 'Apple'];
 console.log(list[2]);

 let students = ['Bob', 'Matt', 'AB', 1, 3, 5, true, ['Kris', 'Taylor', 'Will']];
 console.log(typeof(students)) // typeof return datatype
 console.log(students instanceof(Array)) //instanceof returns bool of dtype compared to instanceof(dtype)

 console.log(`Hello ${students[7][2]}`)
