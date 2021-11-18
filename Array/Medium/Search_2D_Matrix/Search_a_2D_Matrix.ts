/*
        Write an efficient algorithm that searches for a value in an m x n matrix. 
        This matrix has the following properties:
                1) Integers in each row are sorted from left to right.
                2) The first integer of each row is greater than the last integer of the previous row.
        
        Input: 
                matrix = 
                        [
                                [1, 3, 5, 7],
                                [10, 11, 16, 20],
                                [23, 30, 34, 60]
                        ], 
                target = 3
        Output: true
        
        Input: 
                matrix = 
                        [
                                [1, 3, 5, 7],
                                [10, 11, 16, 20],
                                [23, 30, 34, 60]
                        ], 
                target = 13
        Output: false

        Constraints:
                1) m == matrix.length
                2) n == matrix[i].length
                3) 1 <= m, n <= 100
                4) -10^4 <= matrix[i][j], target <= 10^4
*/

function Binary_Search( array: number[], key: number ): number {
        let start: number = 0;
        let end: number = array.length-1;

        while( start <= end ) {

                let midpoint: number = Math.floor( (start + end) / 2 );
                if( key == array[midpoint] ) {
                        return midpoint;
                }
                if( key > array[midpoint] ) {
                        start = midpoint + 1;
                }
                else {
                        end = midpoint - 1;
                }

        }

        return -1;
}

var searchMatrix = function( matrix: number[][], target: number ): boolean {     
        
        for( let i:number = 0; i < matrix.length; i++ ) {
                if( target < matrix[i][0] ) {
                        break;
                }
                else if( target >= matrix[i][0] && target <= matrix[i][matrix[i].length-1] ) {
                        let horizontal_result: number = Binary_Search( matrix[i], target );  
                        if(  horizontal_result != -1 ) {
                                return true;
                        }
                }
        }
        
        return false;
};