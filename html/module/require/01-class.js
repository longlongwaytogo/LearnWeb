define(function(){  
    var allStudents =[];
    return {
        classID: "001",
        department: "computer",
        addToClass: function(student) {
            allStudents.push(student);
        },
        getClassSize: function() {
            return allStudents.length;
        },
        getStudent: function(i) {
            if(i >= 0 && i < allStudents.length) {
                return allStudents[i];
            }
            else {
                return undefeind;
            }
        }
     };
    }
);