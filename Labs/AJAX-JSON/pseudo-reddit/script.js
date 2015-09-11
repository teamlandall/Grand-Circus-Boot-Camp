$(function(){

  $.get('https://www.reddit.com/r/aww/.json', function(data){
    $.each(data.data.children.slice(1, 15),
      function (i, post) {
        $("#reddit-feed").append( '<img src="'+post.data.thumbnail+'"/>' + post.data.title + " " + post.data.score + '<br>' )
        });
    console.log(data);
    });


});