class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const a = s.sort(), b = t.sort()

        return a === b
    }
}
