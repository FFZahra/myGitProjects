// The given constant Kelvin value:
const kelvin = 310;
// converting Kelvin to Celsius:
var celsius = kelvin - 273;
// converting Celsius to Fahrenheit:
var fahrenheit = celsius * 9 / 5 + 32;
// rounding down the value of fahrenheit:
fahrenheit = Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
// converting Celsius to Newton:
var newton = celsius * (33 / 100);
console.log();
console.log(`${kelvin} degrees Kelvin => ${celsius} degrees Celsius (${fahrenheit} degrees Fahrenheit.)`);
