/*
 * @param { number } num
 * @return { number }
*/

var smallestNumber = function( num ) {
        let n = num;
        num = Array.from( num.toString() );
        if( n > 0 ) {
                num = num.map( Number ).sort( ( a, b ) => a - b );
                let index = -1;
                if( num[ 0 ] === 0 ) {
                        index = num.lastIndexOf( 0 ) + 1;
                        [ num[ 0 ], num[ index ] ] = [ num[ index ], num[ 0 ] ];
                }
                return num.join('');
        } 
        else if( n < 0 ) {
                num = num.slice(1).map( Number ).sort( ( a, b ) => b - a );
                return -num.join("");
        } 
        return n;
};