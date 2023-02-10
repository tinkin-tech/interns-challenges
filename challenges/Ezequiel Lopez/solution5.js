// A number and a boolean: the value and type are different.

//checkEquality(0, "0") ➞ false
// A number and a string: the type is different.

//checkEquality(1,  1) ➞ true
// A number and a number: the type and value are equal.

function checkTypes(type1, type2) {
	if (typeof type1 === typeof type2 && type1 === type2) {
		return true
	}

	return false
}

console.log(checkTypes(0, null))
