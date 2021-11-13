/*
        Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
        Each element in the array represents your maximum jump length at that position.
        Your goal is to reach the last index in the minimum number of jumps.
        You can assume that you can always reach the last index.

        Example 1:
                Input: nums = [2,3,1,1,4]
                Output: 2
                Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
        Example 2:
                Input: nums = [2,3,0,1,4]
                Output: 2
        Constraints:
                1) 1 <= nums.length <= 10^4
                2) 0 <= nums[i] <= 1000
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
                [ max, index, l ] = getMaxValue( array.slice( index+1, index+1 + array[index] ), index+1, array.slice(0, index).length );
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