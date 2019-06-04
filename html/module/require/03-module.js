
var student = function(name){
    return name && {
        getName: function() {
            return name;
        }
    };
},
course = function(name) {
    return name && {
        getName: function() {
            return name;
        }
    };
},
controller = function () {
    var data = {};
    return {
        add: function(stu, cour) {
            var stuName = stu && stu.getName(),
            courName = cour && cour.getName(),
            current,
            _filter = function(e) {
                return e === courName;
            };
            if(!stuName || !courName) return;

            current = data[stuName] = data[stuName] || [];
            if(current.filter(_filter).length === 0) {
                current.push(courName);
            }

        },
        list: function(stu) {
            var stuName = stu && stu.getName(),
            current = data[stuName];
            current && console.log(current.join(';'));
        }
    }
};

