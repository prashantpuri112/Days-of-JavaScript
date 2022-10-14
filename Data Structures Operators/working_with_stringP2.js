'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    //ES6 enhanced object literals
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1},${ing2},${ing3}`);
    },
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};


const airline = 'TAP Air Nepal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'pRaShant'; //prashant
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect);

// Comparing email
const email = 'hello@prashant.io'
const loginEmail = 'Hello@Prashant.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); //trimmed the space (\n)
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);

// replaceing
const priceUS = '288.9$';
// const priceGB = priceUS.replace('£', '$');  //replacing $ with £

// the above one return the string so using chaining method
const priceGB = priceUS.replace('£', '$').replace('.', ',');
console.log(priceGB);

const announcement = 'All passengers come to bording door 23.Boarding door 23!'
console.log(announcement.replace('door', 'gate')); //only replace the first occurance of this search string 'Door'

console.log(announcement.replaceAll('door', 'gate')); //Works Perfectly

// Using regular expression (To tell replace method it should target all the occurrences)

console.log(announcement.replace(/door/g, 'gate')); //g stands for global

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('neo'));
console.log(plane.includes('neop'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('n.eo')) {
    console.log('Part of the NEW Airbus family');
}

//Practice exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase()
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome aboard');
    }


};
checkBaggage('I have a laptop, some food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');



