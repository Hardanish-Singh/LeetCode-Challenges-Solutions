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
};
