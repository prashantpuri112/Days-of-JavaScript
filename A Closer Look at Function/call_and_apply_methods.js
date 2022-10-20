'use strict';

const nepalair = {
    airline: 'Nepal Air',
    iataCode: 'NA',
    bookings: [],
    // book: function(){} //old syntax
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name })
    },

};

nepalair.book(239, 'Prashant Puri')
nepalair.book(328, 'Puri Prashant')
console.log(nepalair);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = nepalair.book; //book function

// book(23, 'Sarah Williams'); //no work
//Call method (Always prefered)
book.call(eurowings, 23, 'Sarah Williams')
console.log(eurowings);

book.call(nepalair, 933, 'Mary Cooper');
console.log(nepalair);

const swiss =
{
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: []
}
book.call(swiss, 508, 'Prasshant Puri');
console.log(swiss);

//Apply methods (It doesn't receive the list of arguments after the this keywords)
const flightData = [609, 'Prashant Puri'];
book.apply(swiss, flightData) //2nd one array data
console.log(swiss); //usually we don;t use apply method in modern JavaScript

book.call(swiss, ...flightData);
