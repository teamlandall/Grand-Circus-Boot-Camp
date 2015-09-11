// Prompts the user to pick the starting classification of temperature (Fahrenheit or Celcius)
// do / while loop keeps checking until F or C is entered.
// Stores input as variables
// Calls tempConvert and passes both variables (temp and type) from user input. 
// Once type is ID'd, calls the appropriate conversion function
// Outputs to the screen the conversion using document.write.

do {
  var type = prompt("Do you want to convert FROM Fahrenheit (Enter 'F') or Celcuis (Enter 'C'):").toLowerCase();
}while (type !== 'f' &&  type !== 'c');

var temp = prompt("What degree temparture would you like to convert?");

function tempConvert(type, temp){
  if (type === 'f'){  
    convertToCelcius(temp);
  } else {  
    convertToFahrenheit(temp)
  } 
}

function convertToCelcius(temp){
  var tempC = ((temp - 32) * (5/9));
  document.write("The converted temperature is" + " " + tempC + " " + "Celcius");
}

function convertToFahrenheit(temp){
  var tempF = ((temp * 1.8) + 32);
  document.write("The converted temperature is" + " " + tempF + " " + "Fahrenheit");
}

tempConvert(type, temp);


