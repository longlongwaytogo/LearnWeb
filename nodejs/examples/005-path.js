//005-path
const path=require('path');
const pathStr = path.join(
'/a','/b/c','../','./d','e')
console.log(pathStr);

const pathStr2 = path.join(__dirname,'./file/1.txt');
console.log(pathStr2);

const pathStr3 = __dirname + './a';
console.log(pathStr3);

const name = path.basename(pathStr2);
console.log(name);

const ext = path.basename(name,'.txt');
console.log(ext);
const fpath ='/a/b/c/index.html';
const ext2 = path.extname(fpath)
console.log(ext2) // .html

