/**30.	Hello Admin: Make a array of five or more usernames, including the name 'admin'.
 *  Imagine you are writing code that will print a greeting to each user after they log in to a website. 
 * Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again
 */
var username:string[]=["admin","erix","amilie","tena","herry"]
for(let i =0;i<username.length;i++){
    console.log(username[i]);
}
if(username[0]=="admin"){
    console.log("Hello admin, would you like to see a status report?")
}
else{
    console.log(username,"thank you for logging in again");
}

/**32.	Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
 */
var current_users :string[]=["a","b","c","d","f"];
var new_users : string[]=["c","d","z","s","t"];
while(new_users)