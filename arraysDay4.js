// Day 4
// Swap an element with the one above it or below it, defined at input.  If the element is already at the respective top or bottom of the matrix, don't switch it.  The value of target taken into the function is the piece to swap - for instance, if your array contained 'h' and you wanted to swap it, target should be 'h'.

// NOTE: This solution takes in an extra variable, direction, that tells whether the element should be moved up or down.  direction === 1 indicates up, direction === -1 indicates down.  Could also be modified to take in a string 'up' or 'down' and translate that to 1 and -1 for clarity's sake.

function moveElement(arr, target, direction) {
	if (arr[(direction === 1 ? 0 : arr.length-1)].includes(target)) return arr;
    const position = findElementPosition(arr, target)
    
    let temp = arr[position[0]][position[1]]
    arr[position[0]][position[1]] = arr[position[0]-direction][position[1]]
    arr[position[0]-direction][position[1]] = temp
    
    return arr
}

function findElementPosition(arr, target) {
    let flatPosition = arr.flat().indexOf(target)
    return [Math.floor(flatPosition/arr.length), flatPosition % arr.length]
}

// If you'd like functions to plug into the @huntoberTweets sliding puzzle codepen that work:
// (Replace the moveBlankUp and moveBlankDown with these three functions:)

function moveBlankUp(curGrid, blankGrid) {
    if (curGrid[0].includes(blankGrid)) return curGrid;
    const position = findBlankPosition(curGrid, blankGrid)

    let temp = curGrid[position[0]][position[1]]
    curGrid[position[0]][position[1]] = curGrid[position[0]-1][position[1]]
    curGrid[position[0]-1][position[1]] = temp
    
    checkWin(gridWithBlank, curGrid)
    return curGrid
}    

function moveBlankDown(curGrid, blankGrid) {
    if (curGrid[curGrid.length-1].includes(blankGrid)) return curGrid;
    const position = findBlankPosition(curGrid, blankGrid)
    
    let temp = curGrid[position[0]][position[1]]
    curGrid[position[0]][position[1]] = curGrid[position[0]+1][position[1]]
    curGrid[position[0]+1][position[1]] = temp
    
    checkWin(gridWithBlank, curGrid)
    return curGrid
}
 
function findBlankPosition(curGrid, blankGrid) {
    let flatPosition = curGrid.flat().indexOf(blankGrid)
    return [Math.floor(flatPosition/curGrid.length), flatPosition % curGrid.length]
}