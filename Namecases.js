"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let Person = "Queen Elizabeth II";
const Titlecase = Person.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
console.log("Lowercase:" + Person.toLowerCase() + "\nUpercase:" + Person.toUpperCase() + "\nTitlecase:" + Titlecase);