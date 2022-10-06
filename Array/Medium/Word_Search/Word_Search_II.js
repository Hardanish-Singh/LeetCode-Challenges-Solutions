// function is_visited(...args) {
//         let [grid, i, j, count, word] = args;
//         if (grid[i][j] === word[count] && grid[i][j] != "2") {
//                 return i + "," + j;
//         }
// }

// function move_left(...args) {
//         let [grid, i, j, count, word] = args;
//         --j;
//         if (j >= 0) {
//                 return is_visited(grid, i, j, count, word);
//         }
// }

// function move_top(...args) {
//         let [grid, i, j, count, word] = args;
//         --i;
//         if (i >= 0) {
//                 return is_visited(grid, i, j, count, word);
//         }
// }

// function move_right(...args) {
//         let [grid, i, j, count, word] = args;
//         ++j;
//         if (j <= grid[i].length - 1) {
//                 return is_visited(grid, i, j, count, word);
//         }
// }

// function move_down(...args) {
//         let [grid, i, j, count, word] = args;
//         ++i;
//         if (i <= grid.length - 1) {
//                 return is_visited(grid, i, j, count, word);
//         }
// }

// function move_in_all_four_directions(...args) {
//         let [grid, i, j, stack, count, word, backtracking] = args;
//         let leftPosition = "";
//         let topPosition = "";
//         let rightPosition = "";
//         let bottomPosition = "";
//         let leftCounter = 0;
//         let topCounter = 0;
//         let rightCounter = 0;
//         let bottomCounter = 0;

//         // MARK THE COORDINATE AS VISITED
//         grid[i][j] = "2";

//         // MOVE LEFT & ADD COORDINATES TO STACK
//         leftPosition = move_left(grid, i, j, count, word);
//         if (leftPosition) {
//                 leftCounter = Number(count) + 1;
//                 if (leftCounter <= word.length) {
//                         stack.push(leftPosition + "," + leftCounter);
//                 }
//         }
//         // MOVE TOP & ADD COORDINATES TO STACK
//         topPosition = move_top(grid, i, j, count, word);
//         if (topPosition) {
//                 topCounter = Number(count) + 1;
//                 if (topCounter <= word.length) {
//                         stack.push(topPosition + "," + topCounter);
//                 }
//         }
//         // MOVE RIGHT & ADD COORDINATES TO STACK
//         rightPosition = move_right(grid, i, j, count, word);
//         if (rightPosition) {
//                 rightCounter = Number(count) + 1;
//                 if (rightCounter <= word.length) {
//                         stack.push(rightPosition + "," + rightCounter);
//                 }
//         }
//         // MOVE DOWN & ADD COORDINATES TO STACK
//         bottomPosition = move_down(grid, i, j, count, word);
//         if (bottomPosition) {
//                 bottomCounter = Number(count) + 1;
//                 if (bottomCounter <= word.length) {
//                         stack.push(bottomPosition + "," + bottomCounter);
//                 }
//         }

//         if (!leftPosition && !topPosition && !rightPosition && !bottomPosition && backtracking.length > 0) {
//                 grid = backtracking.pop();
//         }

//         if (leftCounter == topCounter && leftCounter > 0 && topCounter > 0) {
//                 backtracking.push(JSON.parse(JSON.stringify(grid)));
//         }

//         if (leftCounter == rightCounter && leftCounter > 0 && rightCounter > 0) {
//                 backtracking.push(JSON.parse(JSON.stringify(grid)));
//         }

//         if (leftCounter == bottomCounter && leftCounter > 0 && bottomCounter > 0) {
//                 backtracking.push(JSON.parse(JSON.stringify(grid)));
//         }

//         if (topCounter == rightCounter && topCounter > 0 && rightCounter > 0) {
//                 backtracking.push(JSON.parse(JSON.stringify(grid)));
//         }

//         if (topCounter == bottomCounter && topCounter > 0 && bottomCounter > 0) {
//                 backtracking.push(JSON.parse(JSON.stringify(grid)));
//         }

//         if (rightCounter == bottomCounter && rightCounter > 0 && bottomCounter > 0) {
//                 backtracking.push(JSON.parse(JSON.stringify(grid)));
//         }

//         return grid;
// }

// function perform_push_pop_operation(...args) {
//         let [stack, grid, word, backtracking] = args;
//         while (stack.length != 0) {
//                 // DFS METHOD
//                 [i, j, count] = stack.pop().split(",").map(Number);
//                 if (count > word.length) {
//                         break;
//                 }
//                 if (count == word.length) {
//                         grid[i][j] = "2";
//                         return true;
//                 }
//                 grid = move_in_all_four_directions(grid, i, j, stack, count, word, backtracking);
//         }
// }

// var findWords = function (...args) {
//         let [grid, words] = args;
//         // words = Array.from(new Set(words));
//         let result = [];
//         let originalGrid = JSON.parse(JSON.stringify(grid));
//         words = test(grid, words);
//         // console.log(rs);

//         // for( let o = 0; o< words.length; o++) {
//         // let backtracking = [];
//         // let word = words[o];

//         for (let i = 0; i < grid.length; i++) {
//                 for (let j = 0; j < grid[i].length; j++) {
//                         for (let o = 0; o < words.length; o++) {
//                                 let backtracking = [];
//                                 let word = words[o];
//                                 // RESTORE ORIGINIAL GRID
//                                 grid = JSON.parse(JSON.stringify(originalGrid));
//                                 if (grid[i][j] === word[0]) {
//                                         let stack = [];
//                                         grid = move_in_all_four_directions(
//                                                 grid,
//                                                 i,
//                                                 j,
//                                                 stack,
//                                                 (defaultCount = 1),
//                                                 word,
//                                                 backtracking
//                                         );
//                                         if (grid[i][j] == "2" && word.length == 1 && !result.includes(word)) {
//                                                 result.push(word);
//                                         }
//                                         let isFound = perform_push_pop_operation(stack, grid, word, backtracking);
//                                         if (isFound && !result.includes(word)) {
//                                                 result.push(word);
//                                         }
//                                 }
//                         }
//                 }
//         }

//         // }

//         return result;
//         // return [...new Set(result)];
// };

// function test(grid, words) {
//         let str = "";
//         for (let i = 0; i < grid.length; i++) {
//                 str += grid[i].join("");
//         }
//         let rs = [];
//         for (let i = 0; i < words.length; i++) {
//                 let temp = words[i];
//                 let flag = true;
//                 for (let j = 0; j < temp.length; j++) {
//                         if (str.indexOf(temp[j]) === -1) {
//                                 flag = false;
//                                 break;
//                         }
//                 }
//                 if (flag) rs.push(temp);
//         }
//         return rs;
// }

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
        let [stack, grid, word, backtracking] = args;
        while (stack.length != 0) {
                // DFS METHOD
                [i, j, count] = stack.pop().split(",").map(Number);
                if (count == 0) {
                        grid[i][j] = "2";
                        return true;
                }
                grid = move_in_all_four_directions(grid, i, j, stack, count - 1, word, backtracking);
        }
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
                                        let stack = [];
                                        grid = move_in_all_four_directions(
                                                grid,
                                                i,
                                                j,
                                                stack,
                                                word.length - 2,
                                                word,
                                                backtracking
                                        );
                                        if (grid[i][j] == "2" && word.length == 1 && !result.includes(word)) {
                                                result.push(word);
                                        }
                                        let isFound = perform_push_pop_operation(stack, grid, word, backtracking);
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
        let rs = [];
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
                if (flag) rs.push(temp);
        }
        return rs;
}
