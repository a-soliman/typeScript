// let myName: string = "Ahmed";
// let myAge: number = 29;
// let anything: any;
// anything = 12;

// let controlMe = (isTrue: boolean, somthingElse: boolean) => {
// 	let result: number;
// 	if(isTrue) {
// 		result =12;
// 	}
// 	return result;
// }
// console.log('hi')

// Default Pars in functions
// const countdown = (start: number = 10): void => {
// 	while(start > 0) {
// 		start--;
// 	}
// 	console.log("Done! ", start);
// }
// console.log(countdown())

//Rest and Spread
const numbers: number[] = [1,10,99,-5];
console.log(Math.max(...numbers))