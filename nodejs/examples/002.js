//

const http = require('http')
const options = {
  hostname: 'www.flydean.com',
  port: 80,
  path: '/',
  method: 'GET'
}

const req = http.request(options,res=> {
	console.log(`status code: ${res.statusCode}`)
	
	res.on('data',d=>{
		console.log(d);
	})
})

req.on('error',error=> {
	console.error(error)
})

req.end()