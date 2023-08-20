function findMaxSumLessThanNumber(arr1, arr2, target) {
    if(Math.abs(arr1 - target) === Math.abs(target - arr2)) {
        return "Mouse C"
    } else if(Math.abs(arr1 - target) > Math.abs(target - arr2)) {
        return "Cat B";
    } else if(Math.abs(arr1 - target) < Math.abs(target - arr2)) {
        return "Cat A";
    } 
}

// Example usage:
const a = 1
const b = 3
const c = 2
const maxSum = findMaxSumLessThanNumber(a, b, c);
console.log(maxSum); // Output: 9
