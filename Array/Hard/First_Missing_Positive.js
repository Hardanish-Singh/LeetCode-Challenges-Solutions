/*
 * @param { number[] } nums
 * @return { number }
*/
 var firstMissingPositive = function(nums) {
	
        let hash_table = {};
	
	for( let i = 0; i < nums.length; i++ ) {
                if( hash_table[nums[i]] ) {
                        continue;
                }
                else {
                        hash_table[nums[i]] = true;
                }
	}
        
        i = 1;
	while( true ) {
                if( !hash_table[i] ) {
                        return i;
                }
                i++;  
        }

};