
var containsDuplicate = function(nums) {
    debugger
    let set = new Set(nums);
        console.log(set.size);
        console.log(nums.length);
        if (set.size !== nums.length) {
            return true
        } else {
            return false
        }
};
// start playing around with data structures from now on 
// constructors: Array, Object, Set, Map, Stack, Queue

// In this algo, the Set data structure is being used,
// the Set ds is useful for eliminating duplicates, if the nums array
// does not match the sorted Set data structure, it means that there
// are duplicates because the Set ds sorted out the array to reduce
// duplicates if it exists

let nums1 = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(nums1));