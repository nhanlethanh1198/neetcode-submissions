class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {

        let res = [[1]]

        for (let i = 0; i < numRows - 1; i++) {
            // Trick shift 0 and push 0 to the temp -> calculate next elm by trick
            let temp = [
                0,
                ...res[i],
                0
            ]
            let row = []

            for (let j = 0; j < res[i].length + 1; j++) {
                row.push(temp[j] + temp[j + 1])
            }

            res.push(row)
        }

        return res
    }
}
