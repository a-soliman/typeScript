interface NamedPerson {
	name: string;
	age?: number;
	[propName: string]: any;
}

function greet(person: NamedPerson): void {
	console.log("Hello, " + person.name);
}

function changeName(person: NamedPerson):void {
	person.name = "Anna";
}
const person = {
	name: 'Ahmed',
	age: 29
}
greet({name: 'ahmed', hobbies: ["cooking", "singing"]});
changeName(person);
greet(person);