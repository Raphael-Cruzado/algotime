let nums = [1,1,1,3,3,4,3,2,4,2]

var containsDuplicate = function(nums) {
    let set = new Set(nums);

        if (set.size !== nums.length) {
            return true
        } else {
            return false
        }
};
// start playing around with data structures from now on 
// constructors: Array, Object, Set, Map, Stack, Queue

console.log(containsDuplicate)