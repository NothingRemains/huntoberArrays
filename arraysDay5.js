// Day 5
// Shuffle a square matrix array of arrays
// (Obviously not ideal, this algo may be biased.  I'm a baddie, and I write bad code!)

function shuffleArray(arr) {
	const flatArray = arr.flat()
    const length = flatArray.length
    
    // Loop through a flat array of [1,2,3,4,5,6,7,8,9] and shuffle the elements by changing each element with another
    for(let i = 0; i < length; i++) {
        let shuffleTo = Math.floor(Math.random() * (length-1))
        let temp = flatArray[shuffleTo]
        flatArray[shuffleTo] = flatArray[i]
        flatArray[i] = temp
    }
    
    // Push the values from the flat array back into the original unflattened array
    for(let j = 0; j < arr.length; j++){
        for(let k = 0; k < arr[0].length; k++){
            arr[j][k] = flatArray[((j*3) + k)]
        }
    }
    return arr
}