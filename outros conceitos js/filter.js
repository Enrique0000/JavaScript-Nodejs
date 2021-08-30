const ages = [18, 21, 22, 31, 29, 14, 10, 9];
const adults = ages.filter((age) => {
    if(age >= 18){
        console.log("Adults: " + age);
    };
});

console.log(adults);

const population = new Array();


population[0] = {
    name: "Vanessa", 
    vaccinated: "no"
};
population[1] = { 
    name: "Bartolomeu", 
    vaccinated: "no"
};
population[2] = {
    name: "Beatriz", 
    vaccinated: "yes"
};
population[3] = {
    name: "Pietra", 
    vaccinated: "yes"
};

const vaccinateds = population.filter((people) => {
    if(people.vaccinated === "yes"){
        console.log(people.name);
    }
});

console.log(vaccinateds);