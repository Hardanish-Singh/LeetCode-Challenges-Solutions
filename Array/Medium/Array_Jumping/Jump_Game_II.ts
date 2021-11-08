function getMaxValue( arr: number[], i: number ): number[] {
        let max: number = -1;
        let index: number = -1;
        let len: number = 0;
        let l: number = 0;

        for( let i: number = 0; i < arr.length; i++ ) {
                len = arr.slice( i+1 ).length;
                arr[i] = arr[i] - ( arr.slice( i+1 ).length );
                if( arr[i] > max ) {
                        max = arr[i];
                        index = i;
                        l = len;
                }
        }

        return [ max, index + i, l ];
}

function jump( array: number[] ): number {
        if( array.length === 1 ) {
                return 0;
        }
        let min_array_jumps: number = 0;
        let index: number = 0;
        let max: number = array[index];
        let l: number = 0;

        while( true ) {
                min_array_jumps++;
                if( array[index] === 0 ) {
                        return 0;
                }
                if( index + max >= array.length - 1 ) {
                        break;
                }
                [ max, index, l ] = getMaxValue( array.slice( index+1, index+1 + array[index] ), index+1 );
                max = max + l;
                if( max === -1 ) {
                        return 0;
                }
                if( array.slice( index+1, index+1 + array[index] ).length === 0 && array[index] !== 0 ) {
                        break;
                }
        }

        return min_array_jumps;
}