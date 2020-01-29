/**
 * Constructor Function
 * 
 */

 function Person(name, age, canVote){
     this.name = name;
     this.age = age;
     this.canVote = canVote;
 }

 let person4 = new Person('Matt', 42, true)
 let person5 = new Person('John', 33, false)
 console.log(person5);

 //Capitalize the function name for constructors.
 //use this.(parameter) = parameter
