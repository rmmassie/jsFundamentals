// function nameMe(fName, lName){
//     let fullName = (fName + ' ' + lName)
//     console.log(`Hello, My Name is ${fullName}`)
// }

// nameMe('Matt', 'Massie')


//Function to return probability of a match in a group of 'n' people.
function birthdayProb(n) {
    let pairs = (n * n - 1) / 2;
    let x = (365/366)**pairs
    let p = (1-x)*100
    return p.toFixed(6);
}

//set classSize to the number of people in the group.
let classSize = (100)
console.log(`The chance of a match is ${birthdayProb(classSize)}%`)
let n = (30*61);
console.log(n)