class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {


        let left = nums[0], right = nums[0]

        for (let i = 0; i < nums.length; i++) {


            for (let j = 1; j < nums.length; j++) {

                if (i == j) continue

                right = nums[j]


                if (left + right == target) {
                    return [i, j]
                }

            }

            left = nums[i + 1]
        }
    }
}
