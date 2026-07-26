class Solution {
    insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        /* Move elements of arr[0..i-1], that are
           greater than key, to one position ahead
           of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        for (let i = 1; i < nums.length; i++) {
        let key = nums[i];
        let j = i - 1;

        /* Move elements of nums[0..i-1], that are
           greater than key, to one position ahead
           of their current position */
        while (j >= 0 && nums[j] > key) {
            nums[j + 1] = nums[j];
            j = j - 1;
        }
        nums[j + 1] = key;
    }

    console.log("nums",nums);

        for (let i = 0; i < nums.length; i++) {
            if(i >= 0 && i <= nums.length && nums[i] === nums[i+1]){
                return true;
            } else {
                continue;
            }
        }

        return false;
    }
}
