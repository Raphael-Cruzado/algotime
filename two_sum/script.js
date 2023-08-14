function two_Sum (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const currentIndex = nums[i];
        for (let j = 1; j < nums.length; j++) {
            const testIndex = nums[j];
            console.log(currentIndex + testIndex);
        }
    }
}

two_Sum([2,7,11,15],9);
// two_Sum([3,2,4],6);
// two_Sum([3,3],6);