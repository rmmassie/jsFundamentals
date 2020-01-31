// /**
//  * A container that stores multiple sets of data.
//  * stores key:value pairs.
//  * denoted by {}
//  * 
//  */


// let netflix = {
//     id: 1,
//     showName: 'The Office',
//     season1: {
//         seasonInfo: {
//             episodeInfo: [{
//                 episode: 1,
//                 episodeName: 'Pilot',
//             }, {
//                 episode: 2,
//                 episodeName: 'Diversity Day',
//             }, {
//                 episode: 3,
//                 episodeName: 'Health Care',
//             }, {
//                 episode: 4,
//                 episodeName: 'The Alliance',
//             }, {
//                 episode: 5,
//                 episodeName: 'Basketball',
//             }, {
//                 episode: 6,
//                 episodeName: 'Hot Girl',
//             }]
//         },
//     },
//     season2: {}
// }

// //Access object information via . (dot) notation.
// //console.log('season info: ', netflix.season1.seasonInfo)
// console.log(`The name of episode ${netflix.season1.seasonInfo.episodeInfo[2].episode} is ${netflix.season1.seasonInfo.episodeInfo[2].episodeName}`)

/**
 * JSON - JS Object Notation
 * Text based object derived from the JS object notation.
 * Exists as a string. Gets converted into a native JS object to be used.
 */

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

// //console.log(Object.keys(spaceJam.toonSquad));

// console.log(Object.keys(spaceJam.toonSquad.duck).toString());
// let name = 'Matt Massie'
// console.log(Object.values(name).reverse().toString().replace(/[ ]*+/g, ''))

/**
 * Object Bracket Notation
 * like dot notatio, allows drilling into and finding items in the object
 * also allows the setting of keys
 * store keys as a variable
 * works because all keys inside an object are strings, quoted or note.
 */

let garden = {
    vegetable: 'zuccini',
    flower: 'sun flower',
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
}

let test = Object.keys(garden)
console.log(test)
console.log(typeof(test[0]))

let zuccini = garden['vegetable']

let baking = {};
baking['zuccini'] = 'better make bread'

console.log(baking[garden['vegetable']])

let testObject = {
    'Spaces Here' : true,
    noSpaces : true
}