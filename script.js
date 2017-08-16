"use strict";
<<<<<<< HEAD
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// Inhritance 
var Some = (function (_super) {
    __extends(Some, _super);
    function Some(username) {
        var _this = _super.call(this, "Max", username) || this;
        _this.name = "Max";
        _this.age = 31;
        return _this;
    }
    return Some;
}(Person));
var some = new Some('max');
console.log(some);
=======
// class Person {
// 	name: string;
// 	private type: string;
// 	protected age: number = 30;
exports.__esModule = true;
// 	constructor(name: string, public username: string) {
// 		this.name = name;
// 	}
// 	printAge() {
// 		console.log(this.age)
// 	}
// 	setType(type: string) {
// 		this.type = type;
// 		console.log(this.type);
// 	}
// }
// const person = new Person('Max', 'max');
// person.printAge();
// person.setType('something');
// // Inhritance 
// class Some extends Person {
// 	name = "Max";
// 	constructor(username) {
// 		super("Max", username);
// 		this.age = 31;
// 	}
// }
// const some = new Some('max');
// console.log(some)
//getters& setters
// class Plant {
// 	private _species: string ="Default";
// 	get species() {
// 		return this._species;
// 	}
// 	set species(value: string) {
// 		if (value.length > 3) {
// 			this._species = value;
// 		} else {
// 			this._species = "Default";
// 		}
// 	}
// }
// let plant = new Plant();
// console.log(plant.species);
// plant.species = "ABcc";
// console.log(plant.species)
// Static props & methods
//========================
// class Helper {
// 	static PI: number = 3.14;
// 	static clacCircumference(diameter: number): number {
// 		return this.PI * diameter;
// 	}
// }
// console.log(2 * Helper.PI);
// console.log(Helper.clacCircumference(8));
// =========================
// Private constructor
// class OnlyOne {
// 	private static instance: OnlyOne;
// 	private constructor(public name: string) {
// 	}
// 	static getInstance() {
// 		if(!OnlyOne.instance) {
// 			OnlyOne.instance = new OnlyOne('The Only One');
// 		}
// 		return OnlyOne.instance;
// 	}
// }
// let wong = new OnlyOne('The Only One');
// let right = OnlyOne.getInstance();
// ===================================
// === name space  ===
// /// <reference path="circleMAth.ts" />
// /// <reference path="rectangleMAth.ts" /> 
// console.log(MyMath.calculateRectangle(10,20))
// console.log(MyMath.Circle.clacCircumference(3));
// ============================================
// === MODULES ==
var Circle = require("./math/circle");
var rectangle_1 = require("./math/rectangle");
console.log(Circle.PI);
console.log(Circle.claculateCircumference(10));
console.log(rectangle_1.calculateRectangle(20, 10));
>>>>>>> b893699c8d2377b4d554908a0cc566800759736e
