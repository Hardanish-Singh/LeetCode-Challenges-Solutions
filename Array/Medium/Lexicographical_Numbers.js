/*
 * @param { number } n
 * @return { number[] }
*/

var lexicalOrder = function( numbers ) {
        let result = [];
        for( let i = 1; i <= numbers; i++ ) {
                result.push( String( i ) ); 
        }
        return result.sort( (a, b) => a.localeCompare( b ) );
};