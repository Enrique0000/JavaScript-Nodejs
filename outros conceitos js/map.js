const numbers = [10, 30, 60, 90, 120];
const halfNumber = numbers.map(number => number / 2);

console.log(halfNumber);

const peoples = new Array();

peoples[0] = {name: "joao", vaccinated: "yes"};
peoples[1] = {name: "laysa", vaccinated: "yes"};
peoples[2] = {name: "stephanie", vaccinated: "no"};

const vaccinated = peoples.map(people => people.vaccinated === "yes");

console.log(vaccinated);