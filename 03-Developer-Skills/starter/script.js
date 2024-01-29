// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
// const x = '23';

// const calcAge = birthYear => 2037 - birthYear;

// console.log(calcAge(1991));

// Understanding the problem
// - What is temp amplitude? Asnwere: diff between the highest and lowest temperature
// - How to compute max and min temps?
// - What's a sensor error? and what to do?

// Breaking into sub problemas
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Substract min from max (amplitude) and return it
const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);



const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // Fix to number
    value: Number(prompt('Degrees Celsius:')), //Returns string
  };

  console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());


*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}*C ... ${data1[1]}*C ... ${data1[2]}*C ...`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}*C in ${i + 1} days ... `;
  }
  console.log('... ' + str);
};
printForecast(data1);
