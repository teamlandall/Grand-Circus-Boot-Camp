$(document).ready(function(){


  jQuery(document).ready(function($) {
    $.ajax({
    url : 'http://api.wunderground.com/api/b028e8a2020af483/conditions/q/MT/kalispell.json',
    dataType : "jsonp",
    success : function(parsed_json) {
    //location variables  
    var state = parsed_json.current_observation.display_location.state_name;
    var city = parsed_json.current_observation.display_location.city;
    var latitude = parsed_json.current_observation.display_location.latitude;
    var longitude = parsed_json.current_observation.display_location.longitude;
    
    //temp variables
    var temp_f = parsed_json.current_observation.temp_f;
    var humidity = parsed_json.current_observation.relative_humidity;
    var dew_point = parsed_json.current_observation.dewpoint_f;
    var feels_like = parsed_json.current_observation.feelslike_f;
    
    //wind variables
    var wind_speed = parsed_json.current_observation.wind_mph;
    var wind_direction = parsed_json.current_observation.wind_dir;
    var wind_condition = parsed_json.current_observation.wind_string;

    //forecast history
    var forecast_url = parsed_json.current_observation.forecast_url;
    
    //pictures
    var current_icon = parsed_json.current_observation.icon;
    var icon_url = parsed_json.current_observation.icon_url;

    //last updated
    var last_updated = parsed_json.current_observation.observation_time;
    
    //putting info on the page
      $('#location').append('<h2>' + city + ', ' + state + '</h2><p>' + latitude + '    |    ' + longitude);
      $('#pictures').append( 'The current forecast is: ' + current_icon + '<img src="http://icons.wxug.com/i/c/k/clear.gif">');
      $('#temp').append('The current temperature is: ' + '<strong>' + temp_f + '</strong>' + ' degrees fahrenheit.<br>' + 'With humidity at ' + '<strong>' + humidity + '</strong>' + ' and a dew point of ' + dew_point + ' it currently feels like: ' + feels_like +' degrees fahrenheit.');
      $('#wind').append('The wind conditions are currently: ' + wind_condition + '.<p>' + ' Wind Speed: ' + wind_speed + ' mph.');
      $('#last-updated').append(last_updated);
      $('#history').append('For a full, up to date forecast is available here: ' + '<a href="' + forecast_url + '">' + 'Kalispell, MT' + '</a>');
    }
    });
  });
});

// weather underground key
// b028e8a2020af483