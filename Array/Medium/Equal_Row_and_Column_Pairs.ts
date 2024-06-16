// Leetcode: https://leetcode.com/problems/equal-row-and-column-pairs/

// Solution 1
var equalPairs = (grid: number[][]): number => {
    const rowMap = new Map<string, number>();
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        const row = grid[i].map(Number).join(",");
        rowMap.set(row, (rowMap.get(row) || 0) + 1);
    }

    for (let i = 0; i < grid.length; i++) {
        let columns: number[] = [];
        for (let j = 0; j < grid[i].length; j++) {
            columns.push(grid[j][i]);
        }
        let column = columns.map(Number).join(",");
        if (rowMap.has(column)) {
            count += rowMap.get(column) as number;
        }
    }

    return count;
};

// Solution 2
var equalPairs = (grid: number[][]): number => {
    const rowMap = new Map<string, number>();
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        const row = grid[i].map(Number).join(",");
        rowMap.set(row, (rowMap.get(row) || 0) + 1);
    }

    for (let i = 0; i < grid.length; i++) {
        let columns = grid.map((_, j) => grid[j][i]);
        let column = columns.map(Number).join(",");
        if (rowMap.has(column)) {
            count += rowMap.get(column) as number;
        }
    }

    return count;
};
