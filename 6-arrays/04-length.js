// /**
//  * 
//  */

// let long = [1,2,3,4,5,6,7,8,9,10]
// console.log(long.length)
// let arr = ['Try THis']
let arr = [1,2,3,4,5,6,7,8]
let arrCheck = arr instanceof(Array)
if (arrCheck == true) {
    let newArr = arr.reverse();
    arr.forEach((item) => console.log(item));
    console.log(arr)
} else {
    console.log('Not An Array')
}

let name = 'Matt Massie'
nameArray = name.split('');
console.log(nameArray);
nameArray = nameArray.reverse();
console.log(nameArray);
newName = nameArray.join('');
newName = newName.replace(',', '');
console.log(newName);   