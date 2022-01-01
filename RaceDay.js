let raceNumber = Math.floor(Math.random() * 1000);
var isRegEarly = true;
var rAge = 58;

if (rAge > 18 && isRegEarly) {
  raceNumber = raceNumber + 1000;
  console.log(`Your start time is 9:30 am. Your raceNumber is ${raceNumber}`);
} else if (rAge > 18 && !isRegEarly) {
  console.log(`Your start time is 11:00 am. Your raceNumber is ${raceNumber}`);
} else if (rAge < 18) {
  console.log(`Your start time is 12:00 pm. Your raceNumber is ${raceNumber}.`);
}
else {
  console.log("Please see the registration desk.")
}