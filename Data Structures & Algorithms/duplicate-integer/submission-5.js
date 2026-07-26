class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const existingNoOf = hashMap.get(nums[i]) || 0;
            hashMap.set(nums[i],existingNoOf + 1);
            if(hashMap.get(nums[i]) > 1) return true;
        }
        console.log("hashMap", hashMap)
        return false;
    }
}
