// Leetcode: https://leetcode.com/problems/spiral-matrix-iv/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */

var spiralMatrix = function (m, n, head) {
    let result = new Array(m).fill().map(() => new Array(n).fill(-1));
    // row variables
    let rowStart = 0;
    let rowEnd = m - 1;
    // column variables
    let columnStart = 0;
    let columnEnd = n - 1;

    while (head != null) {
        // Move Right
        if (rowStart <= rowEnd) {
            for (let column = columnStart; column <= columnEnd && head != null; column++) {
                result[rowStart][column] = head.val;
                head = head.next;
            }
        }
        // Move Bottom
        rowStart++;
        if (columnStart <= columnEnd) {
            for (let row = rowStart; row <= rowEnd && head != null; row++) {
                result[row][columnEnd] = head.val;
                head = head.next;
            }
        }
        // Move Left
        columnEnd--;
        if (rowStart <= rowEnd) {
            for (let column = columnEnd; column >= columnStart && head != null; column--) {
                result[rowEnd][column] = head.val;
                head = head.next;
            }
        }
        // Move Top
        rowEnd--;
        if (columnStart <= columnEnd) {
            for (let row = rowEnd; row >= rowStart && head != null; row--) {
                result[row][columnStart] = head.val;
                head = head.next;
            }
        }
        columnStart++;
    }

    return result;
};
