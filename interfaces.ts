interface NamedPerson {
	firstName: string;
	age?: number;
	[propName: string]: any;
	greet(lastname: string): void;
}

function greet(person: NamedPerson) {
	console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
	person.firstName = "Other Name";
}


const person: NamedPerson = {
	firstName: 'Max',
	hobbies: ['Cooking', 'Singing'],
	greet(lastName: string) {
		console.log("Hi, I'm  " + this.firstName + " " + lastName);
	}
};

changeName(person);
greet(person);
person.greet("Anything")

// Function Types
interface DoubleValueFunc {
	(number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number) {
	return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10 , 20));

// Interface Inheritance
interface AgedPerson extends NamedPerson {
	age: number;
}

const oldPerson: AgedPerson = {
	age: 27,
	firstName: "Max",
	greet(lastName: string) {
		console.log("Hello")
	}
};

console.log(oldPerson)