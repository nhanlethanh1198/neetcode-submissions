class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const a = Array.from(a).sort(), b = Array.from(b).sort()

        return a.toString() === b.toString()
    }
}
