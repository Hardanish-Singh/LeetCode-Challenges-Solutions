// SOLUTION 1

function findNegativeIndex( index, array ) {
        let val = index + array[index];
        while( val < 0 ) {
                val = array.length + val;
        }
        return val;
}

function findPositiveIndex( index, array ) {
        let val = index + array[index];
        while( val >= array.length ) {
                val = val - array.length ;
        }
        return val;
}

var circularArrayLoop = function( array ) {
        for( let i = 0; i < array.length; i++ ) {
                let hash_map = { };
                hash_map[ i ] = array[ i ];
                let index = i;
            
                while( true ) {
                        if( array[ index ] > 0 ) {
                                if( index + array[ index ] > array.length - 1 ) {
                                        index = findPositiveIndex( index, array );
                                } else {
                                        index = index + array[ index ];
                                }
                        }
                        else if( array[ index ] < 0 ) {
                                if( index + array[ index ] < 0 ) {
                                        index = findNegativeIndex( index, array );
                                } else {
                                        index = index + array[ index ];
                                }
                        }
                        
                        if( 
                                ( array[ i ] > 0 && array[ index ] < 0 ) 
                                        ||
                                ( array[ i ] < 0 && array[ index ] > 0 ) 
                        ) {
                                break;
                        }
                        
                        if( index in hash_map ) {
                                if( i === index && Object.keys( hash_map ).length > 1 ) {
                                        return true;  
                                }
                                else  {
                                        break;
                                }
                        }
        
                        hash_map[index] = array[index];
                }
    
        }
        return false;
};