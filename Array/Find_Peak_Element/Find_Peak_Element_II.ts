// Leetcode: https://leetcode.com/problems/find-a-peak-element-ii/

// Solution 1
var findPeakGrid = (mat: number[][]): number[] => {
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

// Solution 2
var findPeakGrid = (mat: number[][]): number[] => {
    const { max, position } = mat.reduce<{
        max: number;
        position: number[];
    }>(
        (acc, row, i) => {
            row.forEach((val, j) => {
                if (val > acc.max) {
                    acc.max = val;
                    acc.position = [i, j];
                }
            });
            return acc;
        },
        { max: -Infinity, position: [] }
    );

    return position;
};
