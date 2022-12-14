// Day 1 
// Compare two nested arrays for equality

// Flattens out the nested arrays, then joins to string and tests for equality.
// May need to be modified if you need to worry about, say [['a'], ['b']] and [['a','b']]! 
function compareArrays(arr1, arr2) {
	return (arr1.flat().join("") === arr2.flat().join(""))
}

// Also: could do the same thing with JSON.stringify(a) === JSON.stringify(b)

// If you'd like functions to plug into the @huntoberTweets sliding puzzle codepen that work:
// (Replace the Day 1 function with this function:)

function checkWin(arr1, arr2) {
	setIsWin(arr1.flat().join("") === arr2.flat().join(""))
}