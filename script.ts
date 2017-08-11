class Person {
	name: string;
	private type: string;
	protected age: number = 30;

	constructor(name: string, public username: string) {
		this.name = name;
	}

	printAge() {
		console.log(this.age)
	}

	setType(type: string) {
		this.type = type;
		console.log(this.type);
	}
}

const person = new Person('Max', 'max');
person.printAge();
person.setType('something');