/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
*/

var fourSumCount = function(nums1, nums2, nums3, nums4) {
        let hash_table = { };
        let count = 0;
        
        for( let i = 0; i < nums1.length; i++ ) {
                for( let j = 0; j < nums2.length; j++ ) {
                        if( !hash_table[ nums1[i] + nums2[j] ] ) {
                                hash_table[ nums1[i] + nums2[j] ] = 1;
                        } else {
                                hash_table[ nums1[i] + nums2[j] ] += 1;
                        }
                }
        }
        for( let i = 0; i < nums3.length; i++ ) {
                for( let j = 0; j < nums4.length; j++ ) {
                        let diff = - ( nums3[i] + nums4[j] );
                        if( hash_table[ diff ] ) {
                                count += hash_table[ diff ];
                        }
                }
        }
        
        return count;
};


