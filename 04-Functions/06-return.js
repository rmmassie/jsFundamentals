// let name = fName => {
//     return 'Matt';
// }

// let myNameIs = name();
// console.log(myNameIs);

let tip = (bill, tip) => {
    fullAmount = bill * (1 + tip);
    tipAmount = bill * tip;
    return [fullAmount.toFixed(2), tipAmount.toFixed(2)]
}

let myBill = 45;
let myTip = .1
let x = tip(myBill, myTip);
console.log(`The total bill comes to $${x[0]}. The total tip was ${x[1]}`);