// var express = require('express')
// var app = express();
// app.get('/',function(req,res){
	// res.send('hello world');
// });

// var server = app.listen(3000,function(){
	 // var host = server.address().address;
	// var port = server.address().port;
	// console.log('Example app listenning at http://%s:%s',host,port);
	// });
	
	
	var express = require('express')
var app = express();
app.get('/',function(req,res){
	res.send('hello world');
});

var server = app.listen(3000,function(){
	 var host = server.address().address;
	var port = server.address().port;
	console.log(`Example app listenning at http://${host}:${port}`);
	});
	
	// 对网站首页的访问返回 "Hello World!" 字样
app.get('/', function (req, res) {
  res.send('Hello World!');});
// 网站首页接受 POST 请求
app.post('/', function (req, res) {
  res.send('Got a POST request');});
// /user 节点接受 PUT 请求
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');});
// /user 节点接受 DELETE 请求
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');});
  
  var cb0 = function (req, res, next) {
  console.log('CB0');
  next();}
var cb1 = function (req, res, next) {
  console.log('CB1');
  next();}
app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});
