/**
 * forEach() method iterates over each item in the array.
 * does the same this as a for loop or for of loop. 
 */

// var food = ['Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hot Dog'];

// food.forEach(function(foodItem, index, array) foodItem.toUpperCase() {
//     console.log(foodItem)
// })

var movies = ['Cars', 'Cats', 'Jaws', 'The Royal Tenenbaums'];
console.log('------------------Old Array-----------------')
movies.forEach((thisMovie, index) => console.log(index + 1, thisMovie));
movies.push('Braveheart');
movies.splice(1,1,'Star Wars');
console.log('------------------New Array-----------------')
movies.forEach((thisMovie, index) => console.log(index + 1, thisMovie));