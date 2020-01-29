let fb = 15;

(fb % 5 == 0 && fb % 3 == 0)? console.log('Fizz Buzz'):(fb % 3 == 0)?console.log('Fizz'):(fb % 5 == 0)?console.log('Buzz'):console.log('fb');

if (fb % 5 == 0 && fb % 3 == 0)

switch (true) {
    case (fb % 15 == 0):
        console.log('Fizzbuzz');
        break;
    case (fb % 5 == 0):
        console.log('Buzz');
        break;
    case (fb % 3 == 0):
        console.log('Fizz');
        break;
    default:
        break;
}
