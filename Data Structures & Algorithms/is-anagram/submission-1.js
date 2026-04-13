class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false

        const sSortted = Array.from(s).sort(), bSortted = Array.from(t).sort()

        return sSortted.toString() == bSortted.toString()

    }
}
