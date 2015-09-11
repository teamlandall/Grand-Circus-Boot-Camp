// Generate and array 
// elements in array should be integers in a range between two integers passed as arguments

//Basic assigned version that works
var array = [];

function generateArray(x, y){
	for (i = x; i <= y; i++){
		array.push(i);
	}
	console.log(array)
}

generateArray(-4, 2);


// Allows for x > y and still print array in order.
// Uses if/else conitional to ensure x < y. 
// If not, runs a seperate for loop using y as the smaller value. 

var array2 = [];

var user1 = prompt("Enter any number: ");
var user2 = prompt("Enter another number: ");

function generateArray2(x, y){
		if (x < y) {
			for (i = x; i <= y; i++){
				array2.push(i);
			}
		} else {
			for (i = y; i <= x; i++){
				array2.push(i);
			}
		}
	console.log("Your 2nd sorted array is: " + array2);
}

generateArray2(user1, user2);


// If x > y from user input, uses tempX to change the values to only run for loop once. 
// Uses the same user input from the prompt. Generates the same array twice in the console. 

var array3 = [];

var x = 0;
var y = 0;
var tempX = 0;

function generateArray3(x, y){
	if (x > y){
		tempX = y;
		y = x,
		x = tempX;
	} 
	for (i = x; i <= y; i++){
				array3.push(i);
	}
	console.log("Your 3rd sorted array is: " + array3);		
}

generateArray3(user1, user2);




