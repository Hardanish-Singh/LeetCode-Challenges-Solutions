/*
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
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
        
        while( true ) {
                if( i == 0 && j == matrix.length ) {
                        break;
                }
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

        for( let i=0; i<rotate_image.length; i++ ){
                matrix[i] = rotate_image[i];
        }

        return matrix;
};

/*
        SOLUTION 2
*/
var rotate2 = function( matrix ) {
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