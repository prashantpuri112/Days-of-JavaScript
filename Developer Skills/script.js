/*Practicing Developer skills, setting up editor and configuring Prettier
 */

'use strict';

// const x = '23';
// if (x === 23) console.log(23);

// const calcAge = birthYear => 2022 - birthYear;

/* PROBLEM:
We work foracompany buildingasmart home thermometer.Our most recent task is this:"Given an array of temperatures of one day,calculate thetemperature amplitude.
Keep in mind that sometimes there might beasensor error."*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/*
1)Understanding the problem

What is tempersture amplitude?
Answer: Difference between highest and lowest temperature

How to compute max and min Temperature?
What's a sensor error? And what to do?



2)Breaking up into sub-problems

How to ignore errors?
Find max value in temp array
Find min value in temp array
Subtract min from max (Amplitude) and return it
*/

const calcTempAmplitude = function (temps) {
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
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

/*Change of mind: The function should actually receive two arrays of temperatures and not just one
Rest of the function should work just the same */

/*Problem 2:
Function should now receive 2 arrays of temps

1) Understanding the problem
With 2 array, should we implement functionality twice? NO! just merge two arrays

2) Breaking up into sub-problems
Merge 2 arrays
*/

const calcTempAmplitudeNew = function (t1, t2) {
  /*
  (Refrences)
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
*/

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
