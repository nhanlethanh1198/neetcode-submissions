class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let res = 0

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                res = 0
            } else {
                res++
            }
        }

        return res

    }
}
