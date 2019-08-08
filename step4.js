var fs = require('fs');
var path = require('path');

var directory = process.argv[2]
var extention = '.' + process.argv[3];

var callback = function(err, list){
	if(err){
		console.log(err);
		return;
	}
	list.forEach(function(element){
		if(path.extname(element)===  extention){
			console.log(element);
		}
	})
};

fs.readdir(directory,callback);
