//http
const http = require('http')

const server = http.createServer();

server.on('request',(req,res)=>{
	
	console.log("someone visit our web server");
	const url = req.url;
	const method = req.method;
	
	let content = '<h1>404 not found!</h1>'
	if(url==='/' || url=='/index.html'){
		content = '<h1> 首页 </h1>';
	}

res.setheader('Content-Type','text/html;charset=utf-8')
res.end(content);

});
server.listen(2280, () => {
    console.log('http server running at http://127.0.0.1')
})

// https://github.com/chyingp/nodejs-learning-guide
//https://zhuanlan.zhihu.com/p/360306502