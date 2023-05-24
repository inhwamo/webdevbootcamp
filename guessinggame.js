let maximum = parseInt(prompt("Enter the maximum number!"));
if (!maximum) { //Triggers if NaN, which is falsy
	maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;
while (guess !== targetNum) {
	attempts++;
	if (guess > targetNum) {
		guess = parseInt(prompt("Too high! Enter a new guess:"));
	} else { //Don't have to do it like this
		guess = parseInt(prompt("Too low! Enter a new guess:"));
	}
}
console.log(`YOU GOT IT. It took you ${attempts} guesses`);