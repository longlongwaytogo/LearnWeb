// 1-3.js
const express = require('express');
const app = express();

app.get('/',(req,res) => {
	res.send('hello world!');
});
app.listen(3000,()=>{ 
	console.log("Express web app on localhost:3000");
});