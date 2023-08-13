//read FileUpload
const fs = require('fs')

fs.readFile('001.js','utf8',function(err,d){
	console.log("redfile 001.js:\n");
	console.log('---------------------------');
	console.log(d);
	console.log('---------------------------');
});

fs.writeFile('./write.txt',"hello fs!",
'utf8',function(err){
	if(err){
		console.log(err);
	}
});


