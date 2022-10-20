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


//Continue from call and apply method
// book.call(eurowings, 23, 'Sarah Williams')


const bookEW = book.bind(eurowings);
const bookLM = book.bind(nepalair);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 12345);
bookEW23('Prashant Puri');
bookEW23('Martha Cooper');


// With event listeners
nepalair.planes = 300;
nepalair.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
};
// nepalair.buyPlane()

document.querySelector('.buy').addEventListener('click', nepalair.buyPlane.bind(nepalair));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200))

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));





