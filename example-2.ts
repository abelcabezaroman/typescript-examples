function addTwoNumbers(a: number, b: number): number {
	return a + b;
}

function addTwoNumbersWithoutTyped(a, b) {
	return a + b;
}

let addedNumber: number = addTwoNumbers(2, 5);
let addedNumberWithoutTyped = addTwoNumbersWithoutTyped(1, 'pepe');

console.log(addedNumber);



function sayMyName(name: string): void {
    console.log('Your name is ' + name);
}

// function sayMyName(name: string) {
// 	console.log('Your name is ' + name);
// }