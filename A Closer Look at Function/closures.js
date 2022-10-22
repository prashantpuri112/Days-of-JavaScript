/*One of the hardest JavaScript concept
A closure is not a feature that we explicitly use. So we don't create closures manually, like we create a new array or a new function.
So a closure simply happens automatically in certain situations, we just need to recognize those situations.
*/

const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);
