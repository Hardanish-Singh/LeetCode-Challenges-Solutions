// Leetcode: https://leetcode.com/problems/word-search-ii/

function is_visited(...args) {
        let [grid, i, j, count, word] = args;
        if (grid[i][j] === word[count] && grid[i][j] != "2") {
                return i + "," + j;
        }
}

function move_left(...args) {
        let [grid, i, j, count, word] = args;
        --j;
        if (j >= 0) {
                return is_visited(grid, i, j, count, word);
        }
}

function move_top(...args) {
        let [grid, i, j, count, word] = args;
        --i;
        if (i >= 0) {
                return is_visited(grid, i, j, count, word);
        }
}

function move_right(...args) {
        let [grid, i, j, count, word] = args;
        ++j;
        if (j <= grid[i].length - 1) {
                return is_visited(grid, i, j, count, word);
        }
}

function move_down(...args) {
        let [grid, i, j, count, word] = args;
        ++i;
        if (i <= grid.length - 1) {
                return is_visited(grid, i, j, count, word);
        }
}

function move_in_all_four_directions(...args) {
        let [grid, i, j, stack, count, word, backtracking] = args;
        let leftPosition = "";
        let topPosition = "";
        let rightPosition = "";
        let bottomPosition = "";
        let leftCounter = 0;
        let topCounter = 0;
        let rightCounter = 0;
        let bottomCounter = 0;

        // MARK THE COORDINATE AS VISITED
        grid[i][j] = "2";
        // MOVE LEFT & ADD COORDINATES TO STACK
        leftPosition = move_left(grid, i, j, count, word);
        if (leftPosition) {
                leftCounter = Number(count) - 1;
                stack.push(leftPosition + "," + count);
        }
        // MOVE TOP & ADD COORDINATES TO STACK
        topPosition = move_top(grid, i, j, count, word);
        if (topPosition) {
                topCounter = Number(count) - 1;
                stack.push(topPosition + "," + count);
        }
        // MOVE RIGHT & ADD COORDINATES TO STACK
        rightPosition = move_right(grid, i, j, count, word);
        if (rightPosition) {
                rightCounter = Number(count) - 1;
                stack.push(rightPosition + "," + count);
        }
        // MOVE DOWN & ADD COORDINATES TO STACK
        bottomPosition = move_down(grid, i, j, count, word);
        if (bottomPosition) {
                bottomCounter = Number(count) - 1;
                stack.push(bottomPosition + "," + count);
        }

        if (!leftPosition && !topPosition && !rightPosition && !bottomPosition && backtracking.length > 0) {
                grid = backtracking.pop();
        }

        if (leftCounter == topCounter && leftCounter > 0 && topCounter > 0) {
                backtracking.push(JSON.parse(JSON.stringify(grid)));
        }

        if (leftCounter == rightCounter && leftCounter > 0 && rightCounter > 0) {
                backtracking.push(JSON.parse(JSON.stringify(grid)));
        }

        if (leftCounter == bottomCounter && leftCounter > 0 && bottomCounter > 0) {
                backtracking.push(JSON.parse(JSON.stringify(grid)));
        }

        if (topCounter == rightCounter && topCounter > 0 && rightCounter > 0) {
                backtracking.push(JSON.parse(JSON.stringify(grid)));
        }

        if (topCounter == bottomCounter && topCounter > 0 && bottomCounter > 0) {
                backtracking.push(JSON.parse(JSON.stringify(grid)));
        }

        if (rightCounter == bottomCounter && rightCounter > 0 && bottomCounter > 0) {
                backtracking.push(JSON.parse(JSON.stringify(grid)));
        }

        return grid;
}

function perform_push_pop_operation(...args) {
        let [grid, row, column, stack, count, word, backtracking, result] = args;
        do {
                if (stack.length != 0) {
                        // DFS METHOD
                        const [i, j, Count] = stack.pop().split(",").map(Number);
                        row = i;
                        column = j;
                        count = Count;
                        if (Count === 0) {
                                grid[i][j] = "2";
                                return true;
                        }
                }
                grid = move_in_all_four_directions(grid, row, column, stack, count - 1, word, backtracking);
                if (grid[row][column] == "2" && word.length == 1) {
                        return true;
                }
        } while (stack.length != 0);
}

var findWords = function (...args) {
        let [grid, words] = args;
        let result = [];
        // DEEP COPY ORIGINIAL GRID FOR BACKTRACKING
        let originalGrid = JSON.parse(JSON.stringify(grid));
        words = filterWords(grid, words);

        for (let k = 0; k < words.length; k++) {
                let backtracking = [];
                let word = words[k];
                for (let i = 0; i < grid.length; i++) {
                        for (let j = 0; j < grid[i].length; j++) {
                                // RESTORE ORIGINIAL GRID
                                grid = JSON.parse(JSON.stringify(originalGrid));
                                if (grid[i][j] === word[word.length - 1]) {
                                        let isFound = perform_push_pop_operation(
                                                grid,
                                                i,
                                                j,
                                                (stack = []),
                                                word.length - 1,
                                                word,
                                                backtracking,
                                                result
                                        );
                                        if (isFound && !result.includes(word)) {
                                                result.push(word);
                                        }
                                }
                        }
                }
        }

        return result;
};

/* 
        Check each word to see if every letter in the word appear somewhere on the board. 
        If a letter in the word is not found on the board, then reject the entire word before wasting time on DFS searching.
*/
function filterWords(grid, words) {
        let str = "";
        for (let i = 0; i < grid.length; i++) {
                str += grid[i].join("");
        }
        let result = [];
        for (let i = 0; i < words.length; i++) {
                let temp = words[i];
                let flag = true;
                // If word is too long to fit on the board, then quickly reject this word.
                if (temp.length > str.length) {
                        continue;
                }
                for (let j = 0; j < temp.length; j++) {
                        if (str.indexOf(temp[j]) === -1) {
                                flag = false;
                                break;
                        }
                }
                if (flag) result.push(temp);
        }
        return result;
}
