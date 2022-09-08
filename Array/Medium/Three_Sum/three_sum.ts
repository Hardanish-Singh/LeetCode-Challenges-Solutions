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
		let leftIndex: number = i + 1;
		let rightIndex: number = nums.length - 1;
		
		while( leftIndex < rightIndex ) {
			if( nums[leftIndex] + nums[rightIndex] + nums[i] < target) {
				leftIndex++;
			}
			else if( nums[leftIndex] + nums[rightIndex] + nums[i] > target) {
				rightIndex--;
			}
			else if( nums[leftIndex] + nums[rightIndex] + nums[i] === target) {
				hash_table[ nums[i] + "," + nums[leftIndex] + "," + nums[rightIndex] ] = true;
				leftIndex++;
				rightIndex--;
			}
		}	
		
	}
	
	let triplets: Array<Array<number>> = [];
        for( const key of Object.keys( hash_table ) ) {
		triplets.push( key.split(",").map( Number ) );     
        }
	return triplets;
}