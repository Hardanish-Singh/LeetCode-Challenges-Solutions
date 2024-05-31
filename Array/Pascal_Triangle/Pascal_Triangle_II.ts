// Leetcode: https://leetcode.com/problems/pascals-triangle-ii/

const getRow = (rowIndex: number): number[] => {
    const row: number[] = [];
    for (let i = 0; i <= rowIndex; i++) {
        row.push(1);
        for (let j = i - 1; j > 0; j--) {
            row[j] = row[j] + row[j - 1];
        }
    }
    return row;
};
