// Takes an array and splits it into two array. It returns the result of merging the arrays.
function mergeRec(arr) {
    // This is important because when an array is one item long. You have to return it so it can be merged back.
    if (arr.length === 1) {
        return arr
    }

    // Split the array into two array
    const half = Math.floor(arr.length / 2)
    const left = arr.slice(0, half)
    const right = arr.slice(half)

    // We return the result of merging two arrays. Both arrays will be split until they are only of length 1  
    return merge(mergeRec(left), mergeRec(right))
}

// Takes two array and return an array that is sorted
const merge = (leftSide, rightSide) => {
    // We initialize an array in which we sort the two arrays 
    const result = []

    // As long as there is an item in both arrays...
    while (leftSide.length > 0 && rightSide.length > 0) {
        // ... we look which array has a smaller number...
        const arrayWithMin = leftSide[0] < rightSide[0] ? leftSide : rightSide;
        // ... and take that number from the array...
        const smallestNum = arrayWithMin.shift();
        // ... to push it into the results array
        result.push(smallestNum);
    }
    
    // When one of the arrays is empty, we push both arrays in the results array
    // This is no problem because one of the arrays will be empty so only the last (biggest) numbers
    // will be pushed into the results array
    return result.concat(leftSide, rightSide);
}

const test = [1, 3, 2, 4]

console.log(mergeRec(test)) // [ 1, 2, 3, 4 ]

console.log(mergeRec([234, 123123, 32424, -2342, 234234])) // [ -2342, 234, 32424, 123123, 234234 ]