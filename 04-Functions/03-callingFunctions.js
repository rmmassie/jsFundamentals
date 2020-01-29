function hi(){
    console.log('Hello!')
}

// hi; empty
// hi(); correct
// console.log(hi); returns the object type
// console.log(hi()); returns 2 consolelogs, 1 is the function, 2 is undefined.


// function count(){
//     for (let i = 1; i <= n; i++) {
//         console.log(i)
        
//     }
// }
// let n = 50
// count(n)

let arr = ['This', 'is', 'really', 'cool'];

function listAll(array){
    for (const i of array) {
        console.log(i)
    }
}

listAll(arr)