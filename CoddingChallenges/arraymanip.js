function hasSubarrayWithTargetSum(arr, target) {
    const sumMap = new Map();
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        
        if (currentSum === target) {
            return true;
        }
        
        const difference = currentSum - target;
        
        if (sumMap.has(difference)) {
            return true;
        }
        
        sumMap.set(currentSum, i);
    }
    
    return false;
}
// first example
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasSubarrayWithTargetSum(arr, target)); 

// second example
const arr1 = [4, 2, 7, 1, 9, 5];
const target1 = 123456;
console.log(hasSubarrayWithTargetSum(arr, target1)); 