/* Strict Mode: It is a special mode that we can activate in JavaScript which makes us easier for us to write a secure JavaScript code.
To activate Strict Mode, Write string('') at the begining of the script*/

'use strict'; // It has to be the very first statement in the script (File), any code before this will not activate the strict mode

// We can also activate Strict Mode only for function or any specific block of code, but there is no point doing that (So recommended to use it at the beginning of the code)

//It helps to write more secure code, It makes easier for us developers to avoid accidental errors

let hasDriversLicense = false;      //Using let to change the value later
const passTest = true;

if (passTest) hasDriversLicense = true; //Introducing error in var name
if (hasDriversLicense) console.log('I can drive');