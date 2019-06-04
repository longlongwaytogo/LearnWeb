define(['./../03-lib/foo'],function(foo){ 
    return {
        name: "bar",
        hi:function(){
            console.log("Hi!" + foo.name);
        }
    }
});