/*
        Write an efficient algorithm that searches for a target value in an m x n integer matrix. 
        The matrix has the following properties:
                1) Integers in each row are sorted in ascending from left to right.
                2) Integers in each column are sorted in ascending from top to bottom.
        
        Input: 
                matrix = 
                        [
                                [1, 4, 7, 11, 15],
                                [2, 5, 8, 12, 19],
                                [3, 6, 9, 16, 22],
                                [10, 13, 14, 17, 24],
                                [18, 21, 23, 26, 30]
                        ], 
                target = 5
        Output: true

        Input: 
                matrix = 
                        [
                                [1, 4, 7, 11, 15],
                                [2, 5, 8, 12, 19],
                                [3, 6, 9, 16, 22],
                                [10, 13, 14, 17, 24],
                                [18, 21, 23, 26, 30]
                        ], 
                target = 20
        Output: false

        Constraints:
                1) m == matrix.length
                2) n == matrix[i].length
                3) 1 <= n, m <= 300
                4) -10^9 <= matrix[i][j] <= 10^9
                5) All the integers in each row are sorted in ascending order.
                6) All the integers in each column are sorted in ascending order.
                7) -10^9 <= target <= 10^9
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