'use strict';
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1},${ing2},${ing3}`);
    },
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

console.log('---OR---');
// Use ANY data type, return ANY data type, short-circuting

console.log(3 || 'Prashant'); //The results of the OR Operators doesn't always have to be a Boolean
console.log('' || 'Prashant');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello i truthy

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10
console.log(guests2);

console.log('---AND---');

/* when it comes to short circuit evaluation, the AND operator works in the exact opposite way of the OR operator. */

console.log(0 && 'Prashant');

/* the AND operator short circuits, when the first value is falsy. And then immediately returns that falsy value without even evaluating the second operand. */

console.log(8 && 'Prashant');

console.log('Hello' && 23 && null && 'Prashant');

if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');













