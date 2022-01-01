// Program to convert human years to dog years

// Given the following human years:
var myAge = 24;
// calculate dog years for first 2 human years:
var earlyYears =  2;
earlyYears *= 10.5;
// calculate no. of human years remaining:
var laterYears = myAge - 2;
// remaining human years in dog years:
laterYears *= 4;
// total dog years:
myAgeInDogYears = earlyYears + laterYears;
var myName = 'Bleep-bleep'.toLowerCase();
// The output:
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);