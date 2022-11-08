type Path = [number, number, string[], number][];

/**
 * @param { number } i
 * @param { number } j
 * @return { string }
 */

function move_left(i: number, j: number): string {
        j = j - 1;
        return j >= 0 ? i + "," + j : "";
}

/**
 * @param { number } i
 * @param { number } j
 * @return { string }
 */

function move_top(i: number, j: number): string {
        i = i - 1;
        return i >= 0 ? i + "," + j : "";
}

/**
 * @param { number[][] } grid
 * @param { number } i
 * @param { number } j
 * @return { string }
 */

function move_right(grid: number[][], i: number, j: number): string {
        j = j + 1;
        return j <= grid[i].length - 1 ? i + "," + j : "";
}

/**
 * @param { number[][] } grid
 * @param { number } i
 * @param { number } j
 * @return { string }
 */

function move_down(grid: number[][], i: number, j: number): string {
        i = i + 1;
        return i <= grid.length - 1 ? i + "," + j : "";
}

/**
 * @param { number[][] } grid
 * @param { string[] } path
 * @param { number } count
 * @param { string } position
 * @param { number } zeros
 * @param { Path } stack
 * @param { number } result
 * @return { number }
 */

function findPaths(
        grid: number[][],
        path: string[],
        count: number,
        position: string,
        zeros: number,
        stack: Path,
        result: number
): number {
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

/**
 * @param { number[][] } grid
 * @return { number }
 */

var uniquePathsIII = function (grid: number[][]): number {
        let zeros: number = 0;
        let starting_row: number;
        let staring_column: number;

        for (let row: number = 0; row < grid.length; row++) {
                for (let column: number = 0; column < grid[row].length; column++) {
                        if (grid[row][column] === 1) {
                                starting_row = row;
                                staring_column = column;
                        } else if (grid[row][column] === 0) {
                                zeros++;
                        }
                }
        }

        let stack: Path = [[starting_row, staring_column, [`${starting_row},${staring_column}`], 0]];
        let result: number = 0;

        while (stack.length > 0) {
                let [row, column, path, count]: [number, number, string[], number] = stack.pop();

                let leftPosition: string = move_left(row, column);
                if (leftPosition) {
                        result = findPaths(grid, path, count, leftPosition, zeros, stack, result);
                }

                let topPosition: string = move_top(row, column);
                if (topPosition) {
                        result = findPaths(grid, path, count, topPosition, zeros, stack, result);
                }

                let bottomPosition: string = move_down(grid, row, column);
                if (bottomPosition) {
                        result = findPaths(grid, path, count, bottomPosition, zeros, stack, result);
                }

                let rightPosition: string = move_right(grid, row, column);
                if (rightPosition) {
                        result = findPaths(grid, path, count, rightPosition, zeros, stack, result);
                }
        }

        return result;
};
