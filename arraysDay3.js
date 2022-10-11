// Day 3
// Rearrange an array of ways to say hello:  any hello containing the letter 'a' should be moved to the front, any hello containing more than 3 letters should be moved to the back, and within each category (and the remaining hellos), order should otherwise be preserved.

function rearrangeArray(arr) {
	let includesA = arr.filter(el => el.includes('a'))
    let longWords = arr.filter(el => !(el.includes('a'))).filter(el => el.length > 3)
    let remainingWords = arr.filter(el => !(el.includes('a'))).filter(el => el.length <= 3)
    
    return [...includesA, ...remainingWords, ...longWords]
}

// NOTE: Could just do this with the filters in a one-line solution where you plug the pieces into the return directly, but it's much less clear.