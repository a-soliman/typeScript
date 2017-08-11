"use strict";
var Person = (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 30;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Max', 'max');
person.printAge();
person.setType('something');
