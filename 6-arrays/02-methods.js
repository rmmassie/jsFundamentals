/**
 * 
 */
//THESE METHODS MODIFY THE ORIGINAL ARRAY
var food = ['Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hot Dog'];
//.push() - adds the argument to the end of the array, returns length of the new array.
food.push('Pizza')
console.log('push:', food);
//.unshift(x1,x2,x3). Returns the length of the new array.
food.unshift('Popcorn', 'Cheese', 'Steak')
console.log('unshift:', food);
//.splice from i index, remove x values, replace with y .splice(i, x, y). Returns the an array of the deleted values.
let spliceIt = food.splice(1, 2)
console.log(spliceIt, food)
//.splice(i, 0, y) adds arguments midway through the array, returns an empty set.
let splice2 = food.splice(1,0, 'Apple')
console.log(splice2, food);
//.pop() removes the last item of the array. returns the item removed.
let thisOne = food.pop();
console.log(thisOne, food)
//.shift() removes the first item, returns the removed item.
let thisTwo = food.shift();
console.log(thisTwo, food)



