// This works outside of the Else statement where I tried to prompt the user to try the whole thing again.
// Need to play with where to call the original function so that it simply loops back through to get all
// new inputs.


var units = prompt("What is your starting unit? Kilometers (K) or Miles (M)?").toLowerCase();
var startingDistance = prompt("What is the distance?")

var secondPrompt;

function distanceConverter(units, startingDistance){
	if(units === 'k'){
		convertToMiles(startingDistance);
	} else if (units === "m") {
		convertToKilometers(startingDistance);
	} else {
		// Does not call back to original function to try again 
		// Don't think I'm nesting the 2nd if statement correctly
		secondPrompt = prompt("We're only converting KMs and Miles. Want to try again?").toLowerCase();
	} if (secondPrompt === 'y'){
		distanceConverter(units, startingDistance);
	} else{
		alert("Ok. Have a nice day!");
	}
}

function tryAgain(secondPrompt){
	if (secondPrompt === 'y'){
		distanceConverter(units, startingDistance);
	} else {
		alert("Ok, have a nice day!");
	}
}

function convertToKilometers(startingDistance){
	convertedKms = startingDistance / .6214;
	alert(startingDistance + " miles equals" + " " + convertedKms + " kilometers.");
}

function convertToMiles(startingDistance){
	convertedMiles = startingDistance * .6214;
	alert(startingDistance + " kilomters equals" + " " + convertedMiles + " miles.");
}

distanceConverter(units, startingDistance)
// not the right place to call this function.
// tryAgain(secondPrompt);