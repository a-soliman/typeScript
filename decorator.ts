function logged(constructorFn: Function) {
	console.log(constructorFn);
}

@logged
class Person {
	constructor() {
		console.log("HI")
	}
}

// Factory
function logging(value: boolean) {
	return value ? logged : null;
}

@logging(true)
class Car {

}


// Advanced
function printable(constructorFn: Function) {
	constructorFn.prototype.print = function(): void {
		console.log(this);
	}
}

@printable
class Plant {
	name = "Green Plant"
}

const plant = new Plant();
(<any>plant).print()

// Method Decorator
function editable(value: boolean) {
	return function(target: any, propName: string, descriptor: PropertyDecorator) {
		descriptor.writable = value
	}
}

class Project {
	projectName: string;

	constructor(name: string) {
		this.projectName = name;
	}

	@editable(false)
	calcBudget() {
		console.log(1000);
	}
}

const project = new Project('Super Project');

project.calcBudget();
project.calcBudget = function() {
	console.log(2000);
}
project.calcBudget()