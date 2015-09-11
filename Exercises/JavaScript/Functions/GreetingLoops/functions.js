// FISHBOWL

// Write a function that says hello. 
// Function takes a parameter and greets the hame it is given. 

// ex. greet('James');
// > Hello, James!

// call it five times. 

// creates original function which greets the user. 
function greet(name){
  console.log("Hello " + name + "!");
}

// prompts for the names
function promptName(){
  var userName = prompt("What's your name?");
  greet(userName);
}

// prompts user to determine how many total greetings to give. 
function promptCall(){
  var x = prompt("How many people do you want to greet?");
  for (var i = 0; i < x; i++){
    promptName();
  }
}

promptCall();

