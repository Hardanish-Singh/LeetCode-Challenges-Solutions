/*
 * @param { number[] } nums
 * @return { number[] }
*/

var sortEvenOdd = function( nums ) {
        var evenNumbers = [];
        var oddNumbers = [];
        var result = [];
        
        for( let i = 0; i < nums.length; i++ ) {
                i % 2 === 0 ? evenNumbers.push( nums[i] ) : oddNumbers.push( nums[i] );
        }
        
        evenNumbers.sort( ( a, b ) => a - b );
        oddNumbers.sort( ( a, b ) => b - a );
        
        var index = 0;
        for( let i = 0; i < nums.length; i++ ) {
                i % 2 === 0 ? result.push( evenNumbers[index] ) : result.push( oddNumbers[index++] );
        }
        return result;
};