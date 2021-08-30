function getSalaryWithName(salary, name){
    console.log("Your salary is: " + salary);
    console.log("Your name is: " + name);
}

getSalaryWithName(700, "Enrique");

function getTheApprovedStudent(name, grade){
    switch(grade){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            console.log("You was not approved " + name);
        break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            console.log("You was approved " + name)
        break;
        default:
            console.log("Put you name and gradle.")
    }
}

getTheApprovedStudent("Enrique", 7);