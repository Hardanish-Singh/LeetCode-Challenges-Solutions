// Leetcode: https://leetcode.com/problems/3sum/

/**
 * @param { number[] } nums
 * @return { number[][] }
*/

function threeSum( nums: Array<number> ): Array<Array<number>> {
	nums.sort( (a, b) => a - b );
	let hash_table: {
		[ key: string ]: boolean
	} = {};
        let target: number = 0;

	for( let i: number = 0; i < nums.length; i++ ) {
		let leftPointer: number = i + 1;
		let rightPointer: number = nums.length - 1;
		
		while( leftPointer < rightPointer ) {
			if( nums[leftPointer] + nums[rightPointer] + nums[i] < target ) {
				leftPointer++;
			}
			else if( nums[leftPointer] + nums[rightPointer] + nums[i] > target ) {
				rightPointer--;
			}
			else if( nums[leftPointer] + nums[rightPointer] + nums[i] === target ) {
				hash_table[ nums[i] + "," + nums[leftPointer] + "," + nums[rightPointer] ] = true;
				leftPointer++;
				rightPointer--;
			}
		}	
		
	}
	
	let triplets: Array<Array<number>> = [];
        for( const key of Object.keys( hash_table ) ) {
		triplets.push( key.split(",").map( Number ) );     
        }
	return triplets;
}