function sortDictionaryByValues(dict) {
        let items = Object.keys( dict )
                          .map( key => [ key, dict[ key ] ] );
        // SORT BY VALUES IN DESCENDING ORDER
        items.sort( ( first, second ) => second[ 1 ] - first[ 1 ] );
        let keys = items.map( key => key[0] );
        return keys;
} 


var topKFrequent = function(nums, k) {
        let frequencies = { 

        };
        for( let i = 0; i < nums.length; i++ ) {
                if( nums[ i ] in frequencies ) {
                        frequencies[ nums[ i ] ] += 1;
                } else {
                        frequencies[ nums[ i ] ] = 1;
                }
        }
        let sortedObject = sortDictionaryByValues( frequencies );
        // FETCH LAST k VALUES FROM ARRAY
        return sortedObject.slice( 0, k );
};