var s : number[]=[1,2,4,5,3];
  console.log(s[4]);
  console.log("\t\n CONDITIONAL TESTING\n");
console.log(s.length==4);
console.log(s[0]==1);
console.log(s[4]==5);

let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

/**24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. 
 * Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
 */

console.log("\n\tTests using the lower case function\n");
var str1 = "HELLO";
var str2 = "hello";
console.log("Lowercase test (True):", str1.toLowerCase() == str2.toLowerCase());


var str3 = "WORLD";
var str4 = "WorLD";
console.log("Lowercase test (False):", str3.toLowerCase() == str4.toLowerCase());

console.log("\n\tTests for equality and inequality with strings\n")

console.log("Equality Test","animal"==="animal");
console.log("Inequality Test","apple" !== "apple");

/**Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
 */
var b :number[]=[2,3,4,5,6];
console.log("\n\tNUMERICAL TESTING\n");
console.log(b[0]==2 && b[2]== 4 );
console.log(b[2]==4 || b[3]==0);

/**25.	Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and 
 * assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
 */
console.log("ALEIN COLOR #1:\n")
console.log("\n\tVERSION 1\n")
var alien_color : string="green";
if(alien_color=="green"){
    console.log("player earned 5 points");
}
else{
    console.log();
}
console.log("\n\tVERSION 2\n")
var alien_color : string="red";
if(alien_color=="green"){
    console.log("player earned 5 points");
}
else{
    console.log();
}

/**26.	Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
• Write one version of this program that runs the if block and another that runs the else block.
 */
console.log("ALEION COLOR#2:\nIF-ELSE CHAIN\n");

if(alien_color=="green"){
    console.log("you earned 5 points");
}
else if(alien_color!="green"){
    console.log("you earned 10 points");
}
else{
    console.log("you lost the game")
}


console.log("\n\tALIEON COLOR #3\n");

import * as readlineSync from 'readline-sync';


var color = readlineSync.question('Enter your alien color: ');

    if(color=="green"){
        console.log("you earned 5 points");
    }
    else if(color=="yellow"){
        console.log("you earned 10 points");
    }
    else if(color=="red"){
        console.log("you earned 10 points");
    }
    else{
        console.log();
    }


/**28.	Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.
• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
• If the person is age 65 or older, print a message that the person is an elder.
 */
console.log("\n\tSTAGES OF LIFE\n");
var age =readlineSync.question('Enter your age: ');
if(age<2){
    console.log("baby")
}
else if(age>=2 && age<4){
    console.log("toddler");

}
else if(age>=4 && age <13){
    console.log("kid");
}
else if(age>=13 && age<20){
    console.log("teenager")
}
else if(age>=20 && age<65){
    console.log("adult")
}
else{
    console.log("elder")
}

/**29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
 * if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, 

the if block should print a statement, such as You really like bananas!
 */
console.log("\n\tFAVORITE FRUITS\n");
// Array of favorite fruits
let favorite_fruits: string[] = ["banana", "apple", "kiwi"];

// Check if each fruit is in the array
if (favorite_fruits.indexOf("banana") !== -1) {
    console.log("You really like bananas!");
}

if (favorite_fruits.indexOf("apple") !== -1) {
    console.log("You really like apples!");
}

if (favorite_fruits.indexOf("kiwi") !== -1) {
    console.log("You really like kiwis!");
}

if (favorite_fruits.indexOf("orange") === -1) {
    console.log("You don't like oranges.");
}

if (favorite_fruits.indexOf("strawberry") === -1) {
    console.log("You don't like strawberries.");
}
