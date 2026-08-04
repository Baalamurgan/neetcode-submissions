class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const maps = new Map();

        for(let i = 0; i < nums.length; i++){
            maps.set(nums[i], (maps.get(nums[i]) || 0) + 1)
        }

        const newArray = Array.from({ length : nums.length + 1}, () => []);

        for(let [num, freq] of maps) {
            newArray[freq].push(num)
        }

        const finalArray = [];

        for(let i = newArray.length - 1; i >= 0; i--){
            for (const num of newArray[i]) {
                finalArray.push(num);

            if (finalArray.length === k) {
                return finalArray;
        }
}
            // if (newArray[i] && newArray[i].length > 0) {
            //     finalArray.push(...newArray[i]);
            // }
            // if(finalArray.length >= k) return finalArray;
        }

        console.log(finalArray)
        return finalArray;
    }
}
