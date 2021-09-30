/*
        You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
        You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

        Example 1
        Input 1: matrix = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
        Output 1: [ [7, 4, 1], [8, 5, 2], [9, 6, 3] ]

        Example 2:
        Input: matrix = [ [5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16] ]
        Output: [ [15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11] ]

        Constraints:
                1) matrix.length == n
                2) matrix[i].length == n
                3) 1 <= n <= 20
                4) -1000 <= matrix[i][j] <= 1000
*/

/*
 * @param { number[][] } matrix
 * @return { void } Do not return anything, modify matrix in-place instead.
*/

/*
        SOLUTION 1: This solution uses an additional array for finding results
*/
var rotate = function( matrix ) {
        let rotate_image = [];
        let i = matrix.length-1;
        let j = 0;
        let count = 0;
        let temp = [];
        
        while( ! ( i == 0 && j == matrix.length ) ) {
                temp.push( matrix[i][j] );
                count++;
                i--;
                if( count === matrix.length ) {
                        count = 0;
                        j++;
                        i = matrix.length - 1;
                        rotate_image.push(temp);
                        temp = [];
                }
        }

        for( let i=0; i<rotate_image.length; i++ ) {
                matrix[i] = rotate_image[i];
        }

        return matrix;
};

/*
        SOLUTION 2: Reverse on Diagonal and then Reverse Left to Right
*/
var rotate = function( matrix ) {
        for( let i=0; i<matrix.length; i++ ){
                for( let j=0; j<matrix[i].length; j++ ){
                        if( j > i ) {
                                let temp = matrix[i][j];
                                matrix[i][j] = matrix[j][i];
                                matrix[j][i] = temp;
                        }
                }
        }
        for( let i=0; i<matrix.length; i++ ){
                let leftPointer = i;
                let rightPointer = 0;
                let count = matrix[i].length - 1;
                let c = 0;
                while( c != parseInt(matrix[i].length/2) ) {
                        let temp = matrix[leftPointer][rightPointer];
                        matrix[leftPointer][rightPointer] = matrix[leftPointer][count];
                        matrix[leftPointer][count] = temp;
                        count--;
                        rightPointer++;
                        c++;
                }
        }
        return matrix;
}