/*
        Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

        More formally check if there exists two indices i and j such that :
                1) i != j
                2) 0 <= i, j < arr.length
                3) arr[i] == 2 * arr[j]
        

        Example 1:
                Input: arr = [10,2,5,3]
                Output: true
                Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.
        Example 2:
                Input: arr = [7,1,14,11]
                Output: true
                Explanation: N = 14 is the double of M = 7,that is, 14 = 2 * 7.
        Example 3:
                Input: arr = [3,1,7,11]
                Output: false
                Explanation: In this case does not exist N and M, such that N = 2 * M.

        Constraints:
                1) 2 <= arr.length <= 500
                2) -10^3 <= arr[i] <= 10^3
*/

/*
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