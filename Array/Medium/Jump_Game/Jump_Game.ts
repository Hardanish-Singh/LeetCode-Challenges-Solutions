/*
        You are given an integer array nums. 
        You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
        Return true if you can reach the last index, or false otherwise.

        Example 1:
                Input: nums = [2,3,1,1,4]
                Output: true
                Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
        
        Example 2:
                Input: nums = [3,2,1,0,4]
                Output: false
                Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

        Constraints:
                1) 1 <= nums.length <= 10^4
                2) 0 <= nums[i] <= 10^5
*/
function allArrayElementsEquals ( arr: number[] ): boolean {
        arr.sort( ( a,b ) => a-b );
        let leftPointer: number = 0;
        let rightPointer: number = arr.length-1;

        while( leftPointer < rightPointer ) {
                if( arr[leftPointer] !== arr[rightPointer] ) {
                        return false;
                }
                leftPointer++;
                rightPointer--;
        }

        return true;
}

function getMaxValue( arr: number[], i: number, backLength: number ): number[] {
        let max: number = -1;
        let index: number = -1;
        let len: number = 0;
        let l: number = 0;
        let check: number[] = [ ...arr ];
        
        for( let i: number = 0; i < arr.length; i++ ) {
                len = arr.slice( i+1 ).length;
                arr[i] = arr[i] - ( arr.slice( i+1 ).length );
                if( arr[i] > max ) {
                        max = arr[i];
                        index = i;
                        l = len;
                }
        }

        return allArrayElementsEquals( arr ) ? [ check[check.length-1], check.length + backLength, 0 ] : [ max, index + i, l ];
}

function canJump( array: number[] ): boolean {
        if( array.length === 1 ) {
                return true;
        }
        
        let min_array_jumps: number = 0;
        let index: number = 0;
        let max: number = array[index];
        let l: number = 0;

        while( true ) {
                min_array_jumps++;
                if( array[index] === 0 ) {
                        return false;
                }
                if( index + max >= array.length - 1 ) {
                        break;
                }
                [ max, index, l ] = getMaxValue( array.slice( index+1, index+1 + array[index] ), index+1, array.slice(0, index).length );
                max = max + l;
                if( max === -1 ) {
                        return false;
                }
                if( array.slice( index+1, index+1 + array[index] ).length === 0 && array[index] !== 0 ) {
                        return false;
                }
        }

        return true;
}