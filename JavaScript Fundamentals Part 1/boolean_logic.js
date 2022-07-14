const hasDrivingLicense = true // A
const hasGoodVision = true //B

console.log(hasDrivingLicense && hasGoodVision); //AND Operator
console.log(hasDrivingLicense || hasGoodVision); //OR Operator
console.log(!hasDrivingLicense); //NOT Operator

/* const shouldDrive = hasDrivingLicense && hasGoodVision;

if (hasDrivingLicense && hasGoodVision) {
    console.log('Prashant is able to drive!');
} else {
    console.log('Someone else should drive...');
}*/

const isTired = true; // C
console.log(hasDrivingLicense && hasGoodVision && isTired);

if (hasDrivingLicense && hasGoodVision && !isTired) {
    console.log('Prashant is able to drive!');
} else {
    console.log('Someone else should drive...');
}