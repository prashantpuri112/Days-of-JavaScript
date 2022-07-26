/* 
We gonna fix a bugs by using console
*/

'use strict';

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    Uint: 'celsius',


    // C) FIX
    value:Number( prompt('Degrees celsius:'))  //Defining as a number or else it will be taken as a string
  };

// B) FIND
console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value); //looks like a warning
  // console.error(measurement.value); //looks like a error
  

  const kelvin = measurement.value +273;
  return kelvin;
};

// A) IDENTIFY
console.log(measureKelvin());