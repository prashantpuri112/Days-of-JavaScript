//The rest pattern looks exactly like the spread operator. So it has the same syntax with the three dots but it actually does the opposite of the spread operator.

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

//1) Destructing

//Spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

//REST, because on LEFTside of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//The rest pattern basically collects the elements that are unused in the destructuring assignment.

const [Pizza, , Risotto, ...othersFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(Pizza, Risotto, othersFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Function



const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)sum += numbers[i];
    console.log(sum);
}

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');












