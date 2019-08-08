var fs = require('fs');
 var buf = fs.readFile(process.argv[2],'utf8',callback);

 function callback (err, data){
 	if(!err){
		 var array = data.split('\n');
		 console.log(array.length -1);
 	}
 }