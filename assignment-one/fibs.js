function fibs(n) {
	let result = [0, 1];
	for (let i = 2; i < n; i++) {
		result.push(result[result.length - 2] + result[result.length - 1]);
	}
	return result;
}

console.log(fibs(-1));
