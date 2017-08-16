function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Other Name";
}
var person = {
    firstName: 'Max',
    hobbies: ['Cooking', 'Singing'],
    greet: function (lastName) {
        console.log("Hi, I'm  " + this.firstName + " " + lastName);
    }
};
changeName(person);
greet(person);
person.greet("Anything");
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Max",
    greet: function (lastName) {
        console.log("Hello");
    }
};
console.log(oldPerson);
