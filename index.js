const prompt= require('prompt-sync')()
// Task 1
// Create a variable called user1 with the keys username (any string), password (any string), friendCount (any number), and isOnline (false).


let user1={
  username: "ueem",
  password:"reaper123",
  FriendCount:30000,
  isOnline:false
}

// Task 2
// Console log the profile's username

// Make the friend count go up by 1

// Console log the profile's friendCount to check if the value updated
console.log(user1.username)
user1.FriendCount ++;
console.log(user1.FriendCount)



// Task 3
// Prompt the user to enter their password
let user= prompt("enter your password")
// If the user's password is correct, console log "Welcome " + username and set their isOnline to true
if(user1.password === user){
   console.log("welcome "+ user1.username)
   user1.isOnline=true
}
  

// Task 4
// Add a status key to the user1 object and set it to null

// Prompt the user to enter a status and save it in a variable

// Set the status key to be the user's input



// Task 5
// Add a test key to the user1 object and set it to "test"

// Delete the test key from user1

// Console log whether test is in object (use the in keyword)



// Task 6
// Write a for loop that prints every key in the user1 object



// Write a for loop that prints every value in the user1 object



// Task 7 (Stretch)
// Prompt the user for the key they want to see

// Console log that key's value




// Task 8 (Stretch - NESTED OBJECTS)
// Create user2 and user3 objects with the same keys (you can copy/paste and change the username!)



// Create an array called users and push user1, user2, and user3 to it



// Console log "Active users"
// Write a for loop that iterates through the users array
// In the loop, for each user, if the user is online, console log their username





