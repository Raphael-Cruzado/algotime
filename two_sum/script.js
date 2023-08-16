function twoSum (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const currentIndex = nums[i];
        for (let j = 1; j < nums.length; j++) {
            const addend = nums[j];
            const sum = currentIndex + addend;
            if (sum === target && (currentIndex !== addend)) {
                return([i,j]);
            }
        }
    }
}

// var two_Sum = twoSum([2,7,11,15],9); // [0,1]
// var two_Sum = twoSum([3,2,4],6); // [1,2]
// var two_Sum = twoSum([3,3],6); // [0,1]
var two_Sum = twoSum([2,5,5,11], 10); // [1,2]
// ^get testcase above and u gucci
// just have it so that currentIndex !== addend
console.log(two_Sum);
