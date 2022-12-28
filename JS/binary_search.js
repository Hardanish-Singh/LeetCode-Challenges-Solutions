// Leetcode: https://leetcode.com/problems/binary-search/

function Binary_Search(array, key) {
        array.sort((a, b) => a - b);
        let start = 0;
        let end = array.length - 1;

        while (start <= end) {
                let midpoint = Math.floor((start + end) / 2);
                if (key == array[midpoint]) {
                        return midpoint;
                }
                if (key > array[midpoint]) {
                        start = midpoint + 1;
                } else {
                        end = midpoint - 1;
                }
        }

        return -1;
}
