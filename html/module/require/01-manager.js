

define(["./01-student", "./01-class"], function(student, clz){ 
    return { 
     addNewStudent: function(name, gender){ 
     clz.addToClass(student.createStudent(name, gender)); 
       }, 
     getMyClassSize: function(){ 
     return clz.getClassSize(); 
     } 
      }; 
    });