// Leetcode: https://leetcode.com/problems/find-a-peak-element-ii/

const findPeakGrid = (mat: number[][]): number[] => {
    const max: number = Math.max.apply(null, mat.flat());
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === max) {
                return [i, j];
            }
        }
    }
    return [];
};
