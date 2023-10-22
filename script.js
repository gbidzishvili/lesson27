// 1.
// for (let i = 1; i <= 10; i++) {
// 	for (let j = 1; j <= 10; j++) {
// 		console.log(`${i} * ${j} = ${i * j}`);
// 	}
// 	console.log('\n');
// }

// 2.
// let i = 0;
// while (i < 20) {
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	}
// 	i++;
// }

// 3.
// let i = 4;
// let count = 0;
// while (i < 120) {
// 	if (i % 4 == 0) {
// 		count++;
// 	}
// 	i++;
// }
// console.log(count);

// 4.
// let num = Math.abs(Number(prompt('Enter Number')));
// if (isNaN(num)) {
// 	console.log('Enter only numbers');
// } else if (num === 0) {
// 	console.log(`if n is a nuber then n * 0 = 0
// 		so n is a divisor of 0`);
// } else {
// 	let i = 1;
// 	let count = 0;

// 	while (i <= num / 2) {
// 		if (num % i == 0) {
// 			count++;
// 		}
// 		i++;
// 	}
// 	console.log(count + 1);
// }

// 5.
let num1 = Number(prompt('Enter first number'));
let num2 = Number(prompt('Enter second number'));

let min = Math.min(num1, num2);
let max = Math.max(num1, num2);
if (isNaN(num1) || isNaN(num2)) {
	console.log('Error Enter only numbers');
} else if (num1 === num2) {
	console.log('They are equal');
} else {
	for (let i = min; i < max; i++) {
		console.log(i);
	}
}
