var subsets = function( array ) {
        if( array.length === 0 ) {
		return [ [] ];
	}

        array.sort( (a, b) => a - b );
	
        var powerSets = [  ];
        var i = 0;
        for( i = 0; i < array.length; i++ ) {
                powerSets.push( [ array[ i ], i ] );
        }
        
        i = 0;
        while( i !== powerSets.length - 1 ) {
                let powerSet = powerSets[ i ].slice( 0, powerSets[ i ].length - 1 );
                index = powerSets[ i ][ powerSets[ i ].length - 1 ];
                
                for( let j = index + 1; j < array.length; j++ ) {
                        powerSets.push( [ ...powerSet, array[j], j ] );
                }
                
                i++;
        }

        let hash_map = {
                
        };

        for( let i = 0; i < powerSets.length; i++ ) {
                let powerSet = powerSets[ i ].slice( 0, powerSets[ i ].length - 1 );
                if( hash_map[ powerSet ] ) {
                        continue;
                }
                else {
                        hash_map[ powerSet ] = true;
                }
        }

        let result = [];
        for( const key of Object.keys( hash_map ) ) {
                result.push( key.split(",").map( Number ) );
        }
        result.push( [] );
        return result;
}