const http = require('http')

const data = JSON.stringify({
  name: 'flydean'
})

const options = {
  hostname: 'www.flydean.com',
  port: 80,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = http.request(options, res => {
  console.log(`status code: ${res.statusCode}`)

  res.on('data', d => {
    console.log(d);
  })
})

req.on('error', error => {
  console.error(error)
})

req.write(data)
req.end()