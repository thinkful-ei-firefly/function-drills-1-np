'use strict';

function createGreeting(name, age) {
  const yob = getYearOfBirth();
  return `Hi, my name is ${name} and I'm ${age} years old. I was born in ${yob}.`;
}

function getYearOfBirth(age) {
  return 2019 - age;
}

const greeting1 = createGreeting('Nicole', 30);
console.log(greeting1);

