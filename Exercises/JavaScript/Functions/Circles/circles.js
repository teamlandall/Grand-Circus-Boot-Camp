

function calCircumfrence(r){
	return Math.PI * (2*r);
}

function calcArea(r){
	return Math.PI * (r^2);
}

function print(label, value){
	console.log("The Circle's " + label + " is " + value);
}

function calcCirlceDimensions(r){
	print("Area", calcArea(r));
	print("Circumfrence", calCircumfrence(r));
}

calcCirlceDimensions(10);


