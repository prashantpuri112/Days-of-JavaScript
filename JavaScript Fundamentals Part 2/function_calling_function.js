'use strict';
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(mango, grapes) {
    const mangoPieces = cutFruitPieces(mango);
    const grapesPieces = cutFruitPieces(grapes);

    const juice = `Juice with ${mangoPieces} piece of mango and ${grapesPieces} pieces of grapes.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

/* Let's analyze how the data flows between functions
so down here we are calling the fruitProcessor function with the argument two and three (In line 13)
as we already know, this will then replace the mango parameter in the function with the number 2 and  grape with number 3
We are simply replacing the parameter replace orders with the actual values, two and three

Now what's gonna happen?
Mango rights now hold the number 2, and that value two will then be used to call the cutPieces function
As we call cutPieces, the 2 is actually the argument for the cutPieces Function
and It will basically replace the fruit parameter (Fruit PlaceHolder)

So now fruit here in this cutPieces function is also two, then inside the function cutPieces ofcourse the fruit is also then 2.
which will get multiplied by a 4, so the result will gonna be 8

so the result of calling this cutPieces function with mango will be 8, and so that's the value that we then store into the mangoPieces variable
and from there we will then build this juice string

Doubt Question:
Why not simply multiply both of the input values by four?

Answer: Yes we can do that, we can say mangoPieces equals mango times four and grapesPieces here is grapes times four as well
1st Point: Calling one function to another function
2nd Point: This is also a very good example to illustrate the Don't Repeat Your Self Principle (DRY Principle)

*/