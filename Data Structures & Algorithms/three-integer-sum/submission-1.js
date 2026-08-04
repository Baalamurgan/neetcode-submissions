class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = [];

        const sortedNums = nums.sort((a, b) => a - b);

// -4, -1, -1, 0, 1, 2
        for(let i = 0; i < sortedNums.length - 2; i++) {
            if(i > 0 && nums[i] === nums[i-1]) {
                continue;
            }

            let l = i + 1;
            let r = sortedNums.length - 1;
            while (l < r){
                const currentSum = sortedNums[l] + sortedNums[r] + nums[i];
                    if(currentSum > 0) {
                        r--;
                    } else if(currentSum < 0) {
                        l++;
                    } else {
                        result.push([sortedNums[i],sortedNums[l],sortedNums[r]])
                        
                        l++;
                        r--;

                        while (l < r && sortedNums[l] == sortedNums[l-1]) {
                            l++;
                        }

                        while (r > l && sortedNums[r] == sortedNums[r+1]) {
                            r--;
                        }
                    } 
            }
        }
            console.log(result);
            return result;
    }
}
