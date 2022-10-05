function is_visited(...args) {
        let [grid, i, j, count, word] = args;
        return grid[i][j] === word[count] && grid[i][j] != "2" ? i + "," + j : null;
}

function move_left(...args) {
        let [grid, i, j, count, word] = args;
        j = j - 1;
        return j >= 0 ? is_visited(grid, i, j, count, word) : null;
}

function move_top(...args) {
        let [grid, i, j, count, word] = args;
        i = i - 1;
        return i >= 0 ? is_visited(grid, i, j, count, word) : null;
}

function move_right(...args) {
        let [grid, i, j, count, word] = args;
        j = j + 1;
        return j <= grid[i].length - 1 ? is_visited(grid, i, j, count, word) : null;
}

function move_down(...args) {
        let [grid, i, j, count, word] = args;
        i = i + 1;
        return i <= grid.length - 1 ? is_visited(grid, i, j, count, word) : null;
}

function move_in_all_four_directions(...args) {
        let [grid, i, j, stack, count, word, gridTraversal] = args;
        let leftPosition = null;
        let topPosition = null;
        let rightPosition = null;
        let bottomPosition = null;
        let leftCounter = 0;
        let topCounter = 0;
        let rightCounter = 0;
        let bottomCounter = 0;

        // MARK THE COORDINATE AS VISITED
        grid[i][j] = "2";

        // MOVE LEFT & ADD COORDINATES TO STACK
        leftPosition = move_left(grid, i, j, count, word);
        if (leftPosition != null) {
                leftCounter = count + 1;
                stack.push(leftPosition + "," + leftCounter);
        }
        // MOVE TOP & ADD COORDINATES TO STACK
        topPosition = move_top(grid, i, j, count, word);
        if (topPosition != null) {
                topCounter = count + 1;
                stack.push(topPosition + "," + topCounter);
        }
        // MOVE RIGHT & ADD COORDINATES TO STACK
        rightPosition = move_right(grid, i, j, count, word);
        if (rightPosition != null) {
                rightCounter = count + 1;
                stack.push(rightPosition + "," + rightCounter);
        }
        // MOVE DOWN & ADD COORDINATES TO STACK
        bottomPosition = move_down(grid, i, j, count, word);
        if (bottomPosition != null) {
                bottomCounter = count + 1;
                stack.push(bottomPosition + "," + bottomCounter);
        }

        if (!leftPosition && !topPosition && !rightPosition && !bottomPosition && gridTraversal.length > 0) {
                grid = gridTraversal.pop();
        }

        if (leftCounter == topCounter && leftCounter > 0 && topCounter > 0) {
                gridTraversal.push(JSON.parse(JSON.stringify(grid)));
        }

        if (leftCounter == rightCounter && leftCounter > 0 && rightCounter > 0) {
                gridTraversal.push(JSON.parse(JSON.stringify(grid)));
        }

        if (leftCounter == bottomCounter && leftCounter > 0 && bottomCounter > 0) {
                gridTraversal.push(JSON.parse(JSON.stringify(grid)));
        }

        if (topCounter == rightCounter && topCounter > 0 && rightCounter > 0) {
                gridTraversal.push(JSON.parse(JSON.stringify(grid)));
        }

        if (topCounter == bottomCounter && topCounter > 0 && bottomCounter > 0) {
                gridTraversal.push(JSON.parse(JSON.stringify(grid)));
        }

        if (rightCounter == bottomCounter && rightCounter > 0 && bottomCounter > 0) {
                gridTraversal.push(JSON.parse(JSON.stringify(grid)));
        }

        return grid;
}

function perform_push_pop_operation(...args) {
        let [stack, grid, word, gridTraversal] = args;
        while (stack.length != 0) {
                // DFS METHOD
                [i, j, count] = stack.pop().split(",").map(Number);
                if (count == word.length) {
                        grid[i][j] = "2";
                        return true;
                }
                grid = move_in_all_four_directions(grid, i, j, stack, count, word, gridTraversal);
        }
}

var exist = function (...args) {
        let [grid, word] = args;
        // DEEP COPY ORIGINIAL GRID
        let originalGrid = JSON.parse(JSON.stringify(grid));
        let gridTraversal = [];

        for (let i = 0; i < grid.length; i++) {
                for (let j = 0; j < grid[i].length; j++) {
                        // RESTORE ORIGINIAL GRID
                        grid = JSON.parse(JSON.stringify(originalGrid));
                        if (grid[i][j] === word[0]) {
                                grid = move_in_all_four_directions(
                                        grid,
                                        i,
                                        j,
                                        (stack = []),
                                        (defaultCount = 1),
                                        word,
                                        gridTraversal
                                );
                                if (grid[i][j] == "2" && word.length == 1) {
                                        return true;
                                }
                                let isFound = perform_push_pop_operation(stack, grid, word, gridTraversal);
                                if (isFound) {
                                        return true;
                                }
                        }
                }
        }

        return false;
};
