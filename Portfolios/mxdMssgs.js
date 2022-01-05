console.log(("Health tip of the day").toUpperCase());
console.log(' ');
let a = "Drink at least 1 litre of water daily for good body hydration";
let b = "Eat lots of fruits and vegetables"
let c = "Eat wholesome foods like wholegrains, instead of their refined versions";
let d = "Be happy and be helpful to others";
let e = "Are you constipated? Eat a handful of raisins";
const htips = [a, b, c, d, e]

// generate a random index:
const randIndex = () => Math.floor(Math.random() * 6);

// Display message:
console.log(htips[randIndex()]);
