/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function( n ) {
        let c = 0;
    while( true ) {
            c++;
            if( c > 7 ) break;
            if( n == 1 ) {
                    return true;
            }
            let str = String( n );
            
            let splitData = str.split("");
            let sum = 0;
            for( let i = 0; i < splitData.length; i++ ) {
                    sum += Number( splitData[ i ] ) * Number( splitData[ i ] );
            }
            
            n = sum;
    }
    return false;  
};