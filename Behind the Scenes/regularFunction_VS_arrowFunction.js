'use strict';

// var firstName = 'Matilda';


const prashant = {
    year: 2002,
    firstName: 'Prashant',
    calcAge: function () {
        // console.log(this);
        console.log(2022 - this.year);

        /*Solution 1

         const self = this; //self or that
         const isMillenial = function () {
             console.log(self);
             console.log(self.year >= 1981 && self.year <= 2002);
             // console.log(this.year >= 1981 && this.year <= 2002);
         };*/


        //Solution 2
        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 2002);
        };

        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },

    // greet: function () {
    //     console.log(this);
    //     console.log(`Hey ${this.firstName}`);
    // },
};
prashant.greet(); //undefined cause arrow function does not get its own this keyword, it will simply use the this keyword from its surrounding
prashant.calcAge();

// Arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 9, 10);
var addArrow = (a, b) => {
    console.log(arguments);
    return a + b
};
addArrow(2, 5, 8);










