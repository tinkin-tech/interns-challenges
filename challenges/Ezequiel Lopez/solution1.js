const arr = [2, 1, 3, 5, 4]

function solution(arr) {
	let max = arr.reduce((a, b) => Math.max(a, b))

	let min = arr.reduce((a, b) => Math.min(a, b))

	return [min, max]
}

console.log(solution(arr))
