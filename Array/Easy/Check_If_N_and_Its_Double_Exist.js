// Leetcode: https://leetcode.com/problems/check-if-n-and-its-double-exist/

/**
 * @param { number[] } arr
 * @return { boolean }
*/

/*
        SOLUTION 1 USING BINARY SEARCH
*/
const binarySearch = (array, target) => {
        let startIndex = 0;
        let endIndex = array.length - 1;
        while( startIndex <= endIndex ) {
                let middleIndex = Math.floor( (startIndex + endIndex) / 2 );
                if( target === array[middleIndex] ) {
                        return middleIndex;
                }
                if( target > array[middleIndex] ) {
                        startIndex = middleIndex + 1;
                }
                if( target < array[middleIndex] ) {
                        endIndex = middleIndex - 1;
                }
        }
        return null;
}

var checkIfExist = function( arr ) {
        arr.sort( (i,j) => i-j );
        for( let i=0; i<arr.length-1; i++ ) {
                let temp1 = arr.slice(0,i);
                let temp2 = arr.slice(i+1);
                let index = binarySearch( [...temp1, ...temp2], arr[i]*2 );
                if( typeof(index) === 'number' ) {
                        return true;
                }
        }
        return false;
};

/*
        SOLUTION 2 USING HASHMAP/DICTIONARY
*/

var checkIfExist = function( arr ) {
        let dictionary = {
                                
        };
        
        for( let i=0; i<arr.length; i++ ) {
                if( arr[i]*2 in dictionary || arr[i]/2 in dictionary ) {
                        return true;
                }
                dictionary[arr[i]] = i;
        }
        return false;
};