/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = 'Matilda';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = 'JM';
let $function = 27;

let person = 'Jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'Programmer';
let job2 = 'Teacher'

console.log(myFirstJob);
console.log(myCurrentJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;

var job = 'programmer';
job = 'teacher';

lastName = 'Schedmtamm';
console.log(lastName);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas/10, 2 ** 3);
// 2 ** 3 significa 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'TumadreCarbon';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; // 15
x += 10; //x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

//Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


// Task 1
let massMark = 78; //KG
let heightMark = 1.69; //M
let massJohn = 92; //KG
let heightJohn = 1.95; //M

// Task 2
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

// Task 3
console.log(BMIMark);
console.log(BMIJohn);

// Task 4
let markHigherBMI = BMIMark > BMIJohn;


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);

const age = 12;

if (age >= 18) {
    console.log('Sarah can start driving license🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1992;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// Given code
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

// Task 1 and 2: Print a nice output to the console with template literals
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else if (BMIJohn > BMIMark) {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
} else {
  console.log(`Mark and John have the same BMI (${BMIMark})!`);
}

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1;
n = n - 1;
console.log(n);


// 5 Falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean(''));
console.log(Boolean({}));

const money = 1;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 1.23;
if (height) {
  console.log('YAY! Heigth is defined');
} else {
  console.log('Heigth is UNDEFINED');
}


const age = '18';
if (age === 18) console.log('You just become an adult :D (STRICT)');
if (age == 18) console.log('You just become an adult :D (LOOSE)');


const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // '23' == 23 // 23 === 23
  console.log('Cool! 23 is an amazing number')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23, 9 or 7')
}

if (favourite !== 23) console.log('Why not 23?');


const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}


// // Test data
// const scoresDolphins = [96, 108, 89];
// const scoresKoalas = [88, 91, 110];

// // Task 1: Calculate average scores
// const averageScoreDolphins = (scoresDolphins.reduce((a, b) => a + b, 0)) / scoresDolphins.length;
// const averageScoreKoalas = (scoresKoalas.reduce((a, b) => a + b, 0)) / scoresKoalas.length;

// // Task 2: Compare average scores and determine the winner
// if (averageScoreDolphins > averageScoreKoalas) {
//   console.log("Dolphins win the trophy");
// } else if (averageScoreKoalas > averageScoreDolphins) {
//   console.log("Koalas win the trophy");
// } else if (averageScoreDolphins === averageScoreKoalas) {
//   console.log("Both win the trophy");
// }

// const scoreDolphins = (96+108+89) / 3;
// const scoreKoalas = (88+91+110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy🏆');
// } else if(scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

//BONUS 1
const scoreDolphins = (97+112+80) / 3;
const scoreKoalas = (109+95+50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy🏆');
} else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 &&scoreKoalas >= 100) {
  console.log('Both win the trophy!🏆🏆');
} else {
  console.log('No one wins the trophy😔');
}


const day = 'monday';

switch (day) {
  case 'monday': // day === monday
    console.log('Plan my course structure');
    console.log('Go to coding meetup');
    // break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend😊');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan my course structure');
  console.log('Go to coding meetup');
} else if(day === 'tuesday'){
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'Sunday') {
  console.log('Enjoy the weekend');
} else {
  console.log('Not a valid day');
}


3 + 4
1991
true && false && !false
if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);



const age = 12;
// age >= 18 ? console.log('I like to drink whine🍷'):
// console.log('I like to drink water 💧');

const drink = age >= 18 ? 'Whine🍷' : 'Water💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'Whine🍷';
} else {
  drink2 = 'Water💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'Whine🍷' : 'Water💧'}`);

*/

//EJERCICIO 4


const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const totalValue = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}.`);

