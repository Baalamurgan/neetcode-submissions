class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const mapNums = new Map();

        for(let i = 0; i < nums.length; i++) {
            let remaining = target - nums[i];
            if(mapNums.has(remaining)) {
                const index = mapNums.get(remaining)
                return [index, i]
            }

            mapNums.set(nums[i], i);
        }

        return [0,0]
    }
}
