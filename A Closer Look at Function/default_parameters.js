'use strict';

const bookings = [];

const createBooking = function (flightNum, numPassengers = 9, Price = 199 * numPassengers) { //ES6 way of doing (Default values can support any type of expression)

    /*
    Ugly biolerplate code (ES5 way of doing it)
        numPassengers = numPassengers || 1;
        Price = Price || 199;
    */
    const booking = {
        flightNum,
        numPassengers,
        Price
    }
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');

//Overwriting the defaults values

createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000)// if we wanna leave any of the parameter as a default value just simply use undefined

