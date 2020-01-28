/*
Falsy Values - Considered False by default (Bool)
1. False
2. 0
3. "",'',``
4. Null
5. undefined
6. NaN

All Other values are Truthy.
*/

// if (condition to evaluate) {
//  do this stuff
//  }

let isOn = true;

if (isOn == true) {
    console.log('The light is on!');
}

if (isOn){
    console.log('The light is still on!');
}

isOn = false
if (isOn == false){
    console.log('The Light is Off!')
}

let weather = 80;
    if (weather < 50){
        console.log('Wear a Jacket')
    }

