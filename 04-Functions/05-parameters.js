// function nameMe(fName, lName){
//     let fullName = (fName + ' ' + lName)
//     console.log(`Hello, My Name is ${fullName}`)
// }

// nameMe('Matt', 'Massie')


//Function to return probability of a match in a group of 'n' people.
function birthdayProb(n) {
    let pairs = (n * n - 1) / 2;
    let x = (364/365)**pairs
    let p = (1-x)*100
    return p.toFixed(3);
}

//set classSize to the number of people in the group.
let classSize = 54
console.log(`The chance of a match is ${birthdayProb(classSize)}%`)