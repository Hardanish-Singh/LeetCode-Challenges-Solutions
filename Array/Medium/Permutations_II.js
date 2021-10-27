/*
        Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

        Example 1:
                Input: nums = [1,1,2]
                Output:
                        [
                                [1,1,2],
                                [1,2,1],
                                [2,1,1]
                        ]
        Example 2:
                Input: nums = [1,2,3]
                Output: [
                                [1,2,3],
                                [1,3,2],
                                [2,1,3],
                                [2,3,1],
                                [3,1,2],
                                [3,2,1]
                        ]
        
        Constraints:
                1) 1 <= nums.length <= 8
                2) -10 <= nums[i] <= 10
*/

/*
 * @param {number[]} nums
 * @return {number[][]}
*/

function is_dictionary_equal(word1, word2) {
        for( key1 in word1 ) {
                let isFound = false;
                for( key2 in word2 ) {
                        if( key1 == key2 && word1[key1] == word2[key2] ) {
                                delete word2[key2];
                                isFound = true;
                                break;
                        }
                }              
                if( isFound == false ) {
                        return false;
                }
        }
        return true;
}

function is_arrays_equal( array1, array2 ) {
        for( let i=0; i<array1.length; i++ ) {
                for( let j=0; j<array2.length; j++ ) {
                        if( array1[i] !== array2[j] ) {
                                return false;
                        }
                }
        }
        return true;
}

function count_character_occurences( array ) {
        let dictionary = {};
        for( let i=0; i<array.length; i++ ){
                if( dictionary[array[i]] ) {
                        dictionary[array[i]] += 1;
                }
                else {
                        dictionary[array[i]] = 1;
                }
        }
        return dictionary;
}

function is_complete( array1, array2 ){
        let is_complete = true;
        for( let k=0; k<array1.length; k++ ){
                if( array1[k].length !== array2.length ) {
                        is_complete = false;
                        break;
                }
        }
        if( is_complete ) {
                return false;
        }
        return true;
}

var permuteUnique = function(nums) {
        if( nums.length === 0 ) {
                return [];
        }
        if( nums.length === 1 ) {
                return [nums];
        }
        nums.sort((a, b) => a - b);
        let original_character_counts = count_character_occurences(nums);
        let permutations = [];
        let temp = [];
        let temp_permutations = [];
        for( let i=0; i<nums.length; i++ ) {
                if( nums[i] == nums[i-1] ) continue;
                temp_permutations.push([nums[i]]);
                temp = [...nums.slice(0,i), ...nums.slice(i+1)];
                while( is_complete( temp_permutations, nums ) ) {
                        let elementArray = temp_permutations.shift();
                        for( let j=0; j<temp.length; j++ ) {
                                if( temp[j] === temp[j-1] ) continue;
                                let t = [ ...elementArray, temp[j] ];
                                if( t.length === nums.length ){
                                        let permutations_character_counts = count_character_occurences(t);
                                        if( (is_dictionary_equal(original_character_counts, permutations_character_counts)) ) {
                                                for( let i=0; i<permutations.length; i++ ){
                                                        if( is_arrays_equal( permutations[i], t ) ) {
                                                                j = temp.length;
                                                                break;
                                                        }
                                                }
                                                permutations.push( t );
                                                break;
                                        }
                                }
                                temp_permutations.push( t );
                        }
                }
                temp_permutations = [];
        }
        return permutations;
};