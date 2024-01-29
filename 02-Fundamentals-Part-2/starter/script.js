'use strict';
 /*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

const private = 534;


function logger() {
    console.log('My name is Martin');
}

// Calling / running / invoking function
logger();
logger();
logger();

function fruitProccesor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProccesor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProccesor(2,4);
console.log(appleOrangeJuice);

const num = Number ('23');


// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);

//Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);



// Function Expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'Martin'));
console.log(yearsUntilRetirement(1980, 'Jonas'));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProccesor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProccesor(2, 3));

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years!`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired🎉`);
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Martin'));
console.log(yearsUntilRetirement(1950, 'Mike'));


// Task 1
const calcAverage = (score1, score2, score3) => {
    const averageScore = (score1 + score2 + score3) / 3;
    return averageScore;
}

// Task 2
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// Test data
const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

// Task 3
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

// checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins2, scoreKoalas2);



const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);

const y = new Array (1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length -1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schedmntmann', 2037 - 1991, 'Teacher', friends];
console.log(jonas);
console.log(jonas.length);



// Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length -1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length -1])]
console.log(ages);


const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('ElBicho🏆🏆');
console.log(friends);
console.log(newLength);

friends.unshift('John'); // Agrega al principio
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Pechofrio?')); //No esta > se devuelve -1

friends.push(23);
console.log(friends.includes('Steven')); // Steven existe en array
console.log(friends.includes('Pechofrio?')); // Pechofrio no :(
console.log(friends.includes('23')); // No encuentra como string
console.log(friends.includes(23)); // Encuentra como num entero

if (friends.includes('Steven')) {
    console.log('You have a friend called Peter');
}



// const bill = 275;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// const totalValue = bill + tip;

// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${totalValue}.`);


// CHALLENGE 2
// Task 1
const calcTip = billValue => billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;

// const calcTip1 = function (bill) {
//     return bill >= && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }


// Task 2
console.log(calcTip(100)); 

// Task 3
const bills = [125, 555, 44];
const tips = bills.map(bill => calcTip(bill));

// Task 4
const totals = bills.map((bill, index) => bill + tips[index]);

// Log the tips and totals arrays to the console
console.log(tips); // This will log the array of tips
console.log(totals); // This will log the array of totals



const jonasArray = [
    'Jonas',
    'Tumadre',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'TumadreGayzorra',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']
}



const jonas = {
    firstName: 'Jonas',
    lastName: 'TumadreGayzorra',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


// console.log(jonas.'last' + nameKey);

const interestedIn = prompt('What do you want to know about Jonas? Choose between: firstName, lastName, age, job and friends :)')

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong Request! hoose between: firstName, lastName, age, job and friends :)');
}

jonas.location = 'Portugal';
jonasdda['Twitter'] = '@jonasgay';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);



const jonas = {
    firstName: 'Jonas',
    lastName: 'TumadreGayzorra',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`;
    }


};

console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// Challenge
//"Jonas is a 46-year old teacher, and he has a/no drivers license"

console.log(jonas.getSummary());


// `${jonas.firstName} is a ${2037 - jonas.birthYear}-year old ${jonas.job}, and he has ${jonas.getSummary()} drivers license`)



// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'TumadreGayzorra',
//     birthYear: 1991,
//     job: 'Teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`;
//     }


// };

//CHALLENGE 3


let mark = {
    fullName: 'Mark Miller',
    mass: 78, //KG
    heigth: 1.69, //M

    calcBMI: function () {
        this.bmi = this.mass / (this.heigth * this.heigth);
        return this.bmi;
    }

};

let john = {
    fullName: 'John Smith',
    mass: 92, //KG
    heigth: 1.95, //M

    calcBMI: function () {
        this.bmi = this.mass / (this.heigth * this.heigth);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
  } else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
  } else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})!`);
  }



  console.log('Lifting weigths repetition 1 🏋️‍♀️');
//   console.log('Lifting weigths repetition 2 🏋️‍♀️');
//   console.log('Lifting weigths repetition 3 🏋️‍♀️');
//   console.log('Lifting weigths repetition 4 🏋️‍♀️');
//   console.log('Lifting weigths repetition 5 🏋️‍♀️');
//   console.log('Lifting weigths repetition 6 🏋️‍♀️');
//   console.log('Lifting weigths repetition 7 🏋️‍♀️');
//   console.log('Lifting weigths repetition 8 🏋️‍♀️');
//   console.log('Lifting weigths repetition 9 🏋️‍♀️');
//   console.log('Lifting weigths repetition 10 🏋️‍♀️');


  for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);    
  }
 


const jonas = [
    'Jonas',
    'Tumadre',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for(let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);

    // types[i] = typeof jonas[i];
    types.push(typeof jonas [i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0 ; i < years.length ; i++){
    ages.push(2037 - years [i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');
for(let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}


console.log('--- BREAK WITH NUMBER ---');
for(let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof jonas[i]);
}




const jonas = [
    'Jonas',
    'Tumadre',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],

];

// 0, 1, ..., 4
// 4, 3, ..., 0

for(let i = jonas.length -1; i >= 0; i--){
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`----------- Starting exercise ${exercise}`);

    for (let rep = 0; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting Weight repetition ${rep}🏋️‍♂️`);
    }
}

 */


//FOR LOOP
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);    
// }


//WHILE LOOP
// let rep = 1;
// while (rep <= 10) {
//     // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;


// // Cuando no sabes cuantas veces tienes que repetir (suerte) utilizar while
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;

//     if (dice === 6)console.log('Loop is about to end...');      
// }


// // CHALLENGE 4
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }
  
// // 1. Crear un array con todas las cuentas
// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  
// // 2. Crear arrays vacíos para las propinas y los totales
// const tips = [];
// const totals = [];
  
// // 3. Usar un bucle para calcular las propinas y los totales
// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     totals.push(bills[i] + tip);
// }
  
// console.log(bills, tips, totals);
  
// // BONUS: Función para calcular el promedio
// const calcAverage = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr[i];
//     }
//     return sum / arr.length;
// }

// // Llamar a la función calcAverage con el array totals
// const average = calcAverage(totals);
// console.log(average);
  

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
  
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
  
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

const average = calcAverage(totals);
console.log(average);