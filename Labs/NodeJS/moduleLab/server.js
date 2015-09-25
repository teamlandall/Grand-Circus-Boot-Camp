var http = require('http');
var lyrics = require('./lyrics');

http.createServer(function(request, response){
	response.writeHead(200, { "Content-type": "text/plain" });
	var lyric = lyrics[Math.floor(Math.random() * lyrics.length)];
	response.write(lyric);
	response.end();
}).listen(8888);



