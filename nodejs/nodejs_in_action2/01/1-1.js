const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
fs.writeFile('./test.dat'," this is the test data,1234567890",function(err){
	if(err) console.log('write file fail!');
	else {
		console.log('create file ok');
		const outstream = fs.createWriteStream('output.js.gz');
 fs.createReadStream('./test.dat')
   .pipe(gzip)
   .pipe(outstream);
  
	console.log('compress file ok');
	}
});
	
