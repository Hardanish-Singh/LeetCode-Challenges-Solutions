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
        return rotate_image;
};

// var rotate = function( matrix ) {
//         // if( ( matrix.length - 1 ) % 2 === 0 ) {
//         //         console.log( matrix.length/2, matrix.length/2 );
//         // }
//         let i = matrix.length - 1;
//         let j = 0;
//         let firstCycle = true;
//         let firstCycleCount = 0;
//         let count = 1;
//         while( true ) {
//                 if( firstCycle ) {
//                         if( count == 1 ) {
//                                 console.log( i, j );
//                         }
//                         else if( count == 2 ) {
//                                 console.log( firstCycleCount, firstCycleCount );
//                         }
//                         else if( count == 3 ) {
//                                 console.log( firstCycleCount, i );
//                         }
//                         else if( count == 4 ){
//                                 console.log( i, i );
//                         }
//                         count++;
//                 } 
//                 else {
//                         // i = i -1;
//                         // firstCycleCount++;
//                 }
//                 if( count == 5 ) {
//                         count = 1;
//                         firstCycle = false;
//                         break;
//                 }
//         }
// }

// console.log( rotate( [ [5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16] ] ) ) ;