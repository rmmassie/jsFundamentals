let hi = () => {
    console.log('hello')
}

/**
 * Arrow Function 
 * Fat Arrows need to be assigned to a variable
 * 
 */

 //Concise
 let hi = () => console.log('Hello')

 //Block Body
 let hi = () => {
     console.log('Hello')

 }

 let apples = num => console.log(`THere are ${num} apples.`);
 apples(10)

 let counting = num => {
     for (let i = 0; i <= num; i++){
        console.log(i);
     }
     
 }

 counting(44)