'use strict';

function createGreeting(name, age) {
  let yob;
  try {
    yob = getYearOfBirth(age);
  } 
  catch (e) {
    console.log(e.message);
    return;
  }
    return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yob}.`;
}

function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative.');
  } else {
    return 2019 - age;
  }
}

const greeting1 = createGreeting('Nicole', 30);
console.log(greeting1);

