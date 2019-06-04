define(['require','03-app/bar'],function(bar){
    return {
        name:"foo",
        hi: function() {
            bar = require('03-app/bar');
            console.log("Hi!" + bar.name);
        }
    }
});