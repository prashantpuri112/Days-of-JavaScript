/*Falsy values are values that are not exactly false, but will became false when we try to convert them into a boolean.
There are only Five falsy values I.e 0, '', undefined, null, NaN*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Prashant'));
console.log(Boolean({}));
console.log(Boolean(0));
console.log(Boolean(''));

const paisa = 100;
if (paisa) {
    console.log("Dherai nasakau");
} else {
    console.log("Kaam garnu chaina khali paisa paisa!");
}

let height = 0;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log("Height is Undefined");
}
