let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 18

if (age >= 18 && registeredEarly ) {
  raceNumber += 1000;
}
if (age > 18 && registeredEarly) {
  console.log(`Runner ${raceNumber} will race at 09:30`);
}  else if (age > 18 && !registeredEarly) {
    console.log(`Late adults run at 11:00 am, your race number is ${raceNumber}`);
  }  else if (age < 18) {
    console.log(`Youth registrants run at 12:30 pm (regardless of registration), your race number is ${raceNumber}`);
  }  else {
    console.log('See the registration desk');
  }
