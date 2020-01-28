/*
Scope TrackingVariable Applicability

*/

// Globally Scoped x
// let x = 12;

// function scope() {
//     let x = 33;
//     // Locally scoped x
//     return x;
// }

// console.log(scope());
// console.log(x);

// let y = 12;

// function scope() {
//     y = 33;
//     console.log(y);
// }

// scope();
// console.log(y);

/*
Const - Immutable
var is scoped to nearest Function Block
let is scoped to the nearest enclosing block
*/

// var x = 12;

// function varTest() {
//     var x = 33;
    
//     if (1 == 1) {
//         var x = 45;
//         console.log(x)
    
//     }
//     console.log(x)
// }

// varTest();
// console.log(x);

var x = 12;
function letTest() {
    var x = 33;
    if (true) {
        x = 45;
        console.log(x)
    }
    console.log(x)
}
letTest();
console.log(x);

// let x = 1;
// function interator(){

// }