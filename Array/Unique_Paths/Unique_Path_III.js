// Leetcode: https://leetcode.com/problems/unique-paths-iii/

function move_left(...args) {
        let [grid, i, j] = args;
        j = j - 1;
        return j >= 0 ? i + "," + j : null;
}

function move_top(...args) {
        let [grid, i, j] = args;
        i = i - 1;
        return i >= 0 ? i + "," + j : null;
}

function move_right(...args) {
        let [grid, i, j] = args;
        j = j + 1;
        return j <= grid[i].length - 1 ? i + "," + j : null;
}

function move_down(...args) {
        let [grid, i, j] = args;
        i = i + 1;
        return i <= grid.length - 1 ? i + "," + j : null;
}

function findPaths(...args) {
        let [grid, path, count, position, zeros, stack, result] = args;
        let [ni, nj] = position.split(",");
        if (grid[ni][nj] !== -1) {
                if (grid[ni][nj] === 2) {
                        if (count === zeros) {
                                result++;
                        }
                } else {
                        if (!path.includes(`${ni},${nj}`)) {
                                let temp = JSON.parse(JSON.stringify(path));
                                temp.push(`${ni},${nj}`);
                                stack.push([+ni, +nj, temp, count + 1]);
                        }
                }
        }
        return result;
}

var uniquePathsIII = function (grid) {
        let zeros = 0;
        let starting_row = null;
        let staring_column = null;

        for (let row = 0; row < grid.length; row++) {
                for (let column = 0; column < grid[row].length; column++) {
                        if (grid[row][column] === 1) {
                                starting_row = row;
                                staring_column = column;
                        } else if (grid[row][column] === 0) {
                                zeros++;
                        }
                }
        }

        let stack = [[starting_row, staring_column, [`${starting_row},${staring_column}`], 0]];
        let result = 0;

        while (stack.length > 0) {
                let [row, column, path, count] = stack.pop();

                let leftPosition = move_left(grid, row, column);
                if (leftPosition != null) {
                        result = findPaths(grid, path, count, leftPosition, zeros, stack, result);
                }

                let topPosition = move_top(grid, row, column);
                if (topPosition != null) {
                        result = findPaths(grid, path, count, topPosition, zeros, stack, result);
                }

                let bottomPosition = move_down(grid, row, column);
                if (bottomPosition != null) {
                        result = findPaths(grid, path, count, bottomPosition, zeros, stack, result);
                }

                let rightPosition = move_right(grid, row, column);
                if (rightPosition !== null) {
                        result = findPaths(grid, path, count, rightPosition, zeros, stack, result);
                }
        }
        return result;
};
