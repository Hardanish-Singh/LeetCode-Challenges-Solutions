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
                        let [ni, nj] = leftPosition.split(",");
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
                }

                let topPosition = move_top(grid, row, column);
                if (topPosition != null) {
                        let [ni, nj] = topPosition.split(",");
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
                }

                let bottomPosition = move_down(grid, row, column);
                if (bottomPosition != null) {
                        let [ni, nj] = bottomPosition.split(",");
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
                }

                let rightPosition = move_right(grid, row, column);
                if (rightPosition != null) {
                        let [ni, nj] = rightPosition.split(",");
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
                }
        }
        return result;
};
