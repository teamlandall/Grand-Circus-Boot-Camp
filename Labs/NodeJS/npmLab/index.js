var mkdirp = require('mkdirp');

var newDir = process.argv[2] || 'default';

mkdirp( newDir, function(err){
	if (err){ 
		console.log(err)
	} else { 
		console.log('pow!')
	}
});