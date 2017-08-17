// Simple Generic

function echo(data: any) {
	return data;
}

console.log(echo('ddd'))
console.log(echo(29))
console.log(echo({name: 'Ahmed', age:29}))

// Better Generic

function betterEcho<T>(data: T) {
	return data;
}

console.log(betterEcho('ahmed').length)
console.log(betterEcho(29))
console.log(betterEcho({name: 'Ahmed', age:29}))


// Built-in Generic
const testResults: Array<number> = [];

testResults.push(22);

console.log(testResults)


// Arrays
function printAll<T>(args: T[]) {
	args.forEach((element) => console.log(element));
}

printAll<string>(["red", "black", "white"]);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Something"))


// Generic Class
class SimpleMath<T extends number | string> {
	baseValue: T;
	multiplyValue: T;
	calculate(): number {
		return +this.baseValue * +this.multiplyValue;
	}
}

const simpleMath = new SimpleMath();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate())