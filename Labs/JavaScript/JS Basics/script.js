// Prompts the user to pick the starting classification of temperature (Fahrenheit or Celcius)
// Stores input as variables
// Calls tempConvert and passes both variables (temp and type) from user input. 
// Once type is ID'd, calls the appropriate conversion function
// Outputs to the screen the conversion using document.write.

var type = prompt("Do you want to convert FROM Fahrenheit (Enter 'F') or Celcuis (Enter 'C'):");
var temp = prompt("What degree temparture would you like to convert?");

function tempConvert(type, temp){
  if (type === 'F' || type === 'f'){  
    convertToCelcius(temp);
  } else if (type === 'C' || type === 'c'){  
    convertToFahrenheit(temp)
  } else {
    alert("You screwed that up. You'll do better next time.");
  }
}

function convertToCelcius(temp){
  var tempC;
  tempC = ((temp - 32) * (5/9));
  document.write("The converted temperature is" + " " + tempC + " " + "Celcius");
}

function convertToFahrenheit(temp){
  var tempF;
  tempF = ((temp * 1.8) + 32);
  document.write("The converted temperature is" + " " + tempF + " " + "Fahrenheit");
}

// tempConvert(type, temp);


