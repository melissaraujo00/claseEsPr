const person = {
    firstName : "Juan",
    lastName: "Perez",
    adress: {
        street: "Calle principal",
        city : "San Miguel",
        country: "El Salvador"
    },
    hobbies: ["Leer", "correr"]
}
console.log(person.firstName);
console.log(person.adress.city);
console.log(person.hobbies[0]);

const employees = [
    {id: 1, fullName: "Juan Perez", email: "juanperez@gmail.com", age: 20},
    {id: 2, fullName: "Pedro Perez", email: "pedroperez@gmail.com", age: 30},
    {id: 3, fullName: "Ana Rodriguez", email: "anarodriguez@gmail.com", age: 25},
    {id: 4, fullName: "Maria Alvarez", email: "mariaalvarez@gmail.com", age: 27},
    {id: 5, fullName: "Carlos Gomez", email: "carlosgomez@gmail.com", age: 22}
]
//const filteredEmployees = employees.filter(employee => employee.age > 25);
const filteredEmployees = employees.filter(employee => employee.id == 4);
console.log(filteredEmployees);
//console.log(employees)