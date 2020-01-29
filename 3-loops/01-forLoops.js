/** 1. Declare & initialize the variable to iterate against.
 *  2. Declare the 'Do this until' Condition
 *  3. Declare the method of incrementation
 */ 

// for (let testNum = 0; testNum <= 20; testNum+=2) {
//     console.log(testNum)
    
// // start at 0, increment by 1. Do this over and over until the 2. condition is met.
// }

// for (let x=10; x>=0; x-=1){
//     console.log(x);
// }

// for (let y = 0; y >=-24; y -=2){
//     console.log(y);
// }

let name = "Matt Massie"

for (let i = 0; i < name.length; i++) {
    const element = name[i];
    if (element != ' ') console.log(element);
}
let x = 0
for (let i = 0; i <= 50 ; i++) {
    x = x + i
    if (i == 50){
        console.log(x);
    }
}
        