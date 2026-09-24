class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const h = new Set()

        for (const i of nums) {
            if (h.has(i)) {
                return true
            } else {
                h.set(i)
            }
        }

        return false
    }
}
