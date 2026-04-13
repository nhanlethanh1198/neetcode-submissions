class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */


    hasDuplicate(nums) {

        const setted = new Set()

        for (const i of nums) {
            if (setted.has(i)) {
                return true
            }

            setted.add(i)
        }

        return false
    }
}
