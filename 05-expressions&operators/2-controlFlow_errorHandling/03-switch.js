/**
 *  Switch executes a block { }
    can include 'break' or 'default' keywords, but they are optional
    break ends the operation
    default is a catch all, 'otherwise'
 */

// let officeCharacter = 'Dwight';

// switch (officeCharacter) {
//     case 'Michael':
//         console.log('My mind is going a mile an hour.');
//         break;
//     case 'Dwight':
//         console.log('Perfectionschlag.');
//         break;
//     case 'Jim':
//         console.log('Bears, Beets, Battlestar Galactica.');
//         break;
//     default:
//         console.log(`I'm sorry, ${officeCharacter}, but do I know you?`)
//         break;
// }


function dessertQuotes(dessert) {
    switch (dessert) {
        case 'pie':
            console.log('Pie, pie, Oh my!');
            break;

        case 'cake':
            console.log('Cake is great!');
            break;
        case 'ice cream':
            console.log('I scream for Ice Cream');
            break;
            
        default:
            console.log('Not on the Menu');
        
    }
}

