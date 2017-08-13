// class Person {
// 	name: string;
// 	private type: string;
// 	protected age: number = 30;

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

class Helper {
	static PI: number = 3.14;
	static clacCircumference(diameter: number): number {
		return this.PI * diameter;
	}
}

console.log(2 * Helper.PI);
console.log(Helper.clacCircumference(8));