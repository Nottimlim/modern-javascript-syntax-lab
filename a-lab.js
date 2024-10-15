// exercise 1

const nums = [13, 87, 2, 89, 12, 4, 90, 63];
const doubledNums = nums.map(num => num * 2);
console.log(doubledNums); 


// exercise 2 
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];
const [firstTopping, secondTopping] = pizzaToppings;
console.log(firstTopping); 
console.log(secondTopping); 

// exercise 3
const car = { make: 'Audi', model: 'q5' };
const { make, model } = car;
console.log(make); // 'Audi'
console.log(model); // 'q5'

// exercise 4
const pizzaToppingz = ['Pineapple', 'Olives', 'Anchovies'];
const controversialPizzaToppings = [...pizzaToppingz];
console.log(controversialPizzaToppings); 

// exercise 5
const aCar = { make: 'Audi', model: 'q5' };
const myCar = { ...car, model: 'q7' };

console.log(aCar); 
console.log(myCar); 

// exercise 6 
const userProfile = { [propertyName]: 'john_doe' };

console.log(userProfile); 

// exercise 7 done in exportingfile and importingfile

// exercise 8
function describe(noun = 'cat', adjective = 'white') {
    console.log(`The ${noun} is ${adjective}.`);
}

describe(); 
describe('dog', 'brown'); 

// exercise 9
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

pizza === 'tasty' ? console.log('yum') : console.log('yuck');

// exercise 10
const localLangConfig = null;
const LANG = localLangConfig || 'en';
console.log('Language setting:', LANG); 

const userSavedTheme = null;
const USER_THEME = userSavedTheme || 'light';
console.log('User theme setting:', USER_THEME); 

// exercise 11
const adventurer = { name: 'Alice' };
let cat = adventurer.cat?.age;
console.log(cat); 




