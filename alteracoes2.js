var students = new Array();

students[0] = {name: "Amanda", grade: 8};
students[1] = {name: "Bruno", grade: 6};
students[2] = {name: "Anne", grade: 4};
students[3] = {name: "Victor", grade: 5};

var bestStudents = students.filter(students => students.grade >=6);
console.log(bestStudents);