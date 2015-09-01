// Print list of numbers 1 to 100
// Beside the number print whether the number 
// is even or odd.

// ********** For Loop Option ************ //

for (var i = 1; i < 101; i ++) {
	if ( i % 2 === 0){
		console.log(i + " is even.");
	} else {
		console.log(i + " is odd.");
	}
}

// ************ Do While Loop Option *********** //

var j = 1;

do {
	if ( j % 2 === 0){
		console.log(j + ": even");
	} else {
		console.log(j + ": odd");
	}
	j++;
} while (j < 101)

// ************* While Loop ******************* //

var k = 1;

while ( k < 101 ){
	if ( k % 2 === 0){
		console.log(k + ": even");
	} else {
		console.log(k + ": odd");
	}
	k++;
}