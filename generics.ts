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