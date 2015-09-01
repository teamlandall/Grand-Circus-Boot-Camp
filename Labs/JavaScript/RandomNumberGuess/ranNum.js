// Prompt the user for a number between 1 - 10
// Generate a random number between 1 - 10
// Compare the numbers and alert the user if they should guess higher or lower

var ranNum;


// generates a random number
function randomNumber() {
  var ranNum = parseInt(Math.floor(Math.random() * (10 - 1) + 1), 10);
  console.log(ranNum); //so you can cheat and see the random number for quicker guessing purposes.
  return ranNum;
}

// rest of the game happens in here. 
function playGame(){

	// user prompt for number
	var guess = parseInt(prompt("Guess a number between 1-10:"), 10);

	// brings in the random number from the function above. initializes that value as a local variable
	// to be used for comparisons.
	var ranNum = randomNumber();

	// while loop set to run until user guess matches randon number.
	while (guess !== ranNum){

		// compares values, prompts user for another response, giving hints for higher/lower.
		if (guess < ranNum){
			guess = parseInt(prompt("Guess higher..."), 10);
		} else if (guess > ranNum){
			guess = parseInt(prompt("Guess lower..."), 10);
		}	
	}
	// when guess and random number match, this alerts the user of the correct guess. 
	// This has to be outside of the while loop.
	alert("Good Work!");
}

playGame();