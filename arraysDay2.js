// Day 2
// Create dual functions to move an element in an array one spot left or right, unless it's already at the furthest left/right element, respectively.

function moveLeft(input, arr) {
	if (arr.indexOf(input) === 0) return arr;
  let index = arr.indexOf(input)
  let temp = arr[index-1]
  arr[index-1] = arr[index]
  arr[index] = temp
	return arr
}

function moveRight(input, arr) {
	if (arr.indexOf(input) === arr.length-1) return arr;
  let index = arr.indexOf(input)
  let temp = arr[index+1]
  arr[index+1] = arr[index]
  arr[index] = temp
  return arr
}

// NOTE: could also be done with two splices, one to extract, one to insert (or a nested splice).