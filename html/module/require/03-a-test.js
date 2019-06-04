require(['03-a.js'],function(dec){
    console.log(dec);
})

var a =1;
if(a)
{
    console.log("a is 1");
}

require(['03-app/bar','03-lib/foo'],function(bar,foo) {
   bar.hi();
   foo.hi();
});