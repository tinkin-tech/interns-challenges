// profitableGamble(0.2, 50, 9) ➞ true

// profitableGamble(0.9, 1, 2) ➞ false

function solution(prob, prize, pay) {
	if (prob * prize > pay) {
		return true
	}

	return false
}

console.log(solution(0.9, 1, 2))
