/*
 * @param {number[]} nums
 * @return {number[][]}
*/
var permute = function( nums ) {
        if( nums.length === 0 ) {
                return [];
        }
        let permutations = [];
        let temp = [];
        let temp_permutations = [];
        for( let i=0; i<nums.length; i++ ) {
                temp_permutations.push([nums[i]]);
                temp = [...nums.slice(0,i), ...nums.slice(i+1)];
                
                while( true ) {
                        
                        let flag = false;
                        for( let k=0; k<temp_permutations.length; k++ ){
                                if( temp_permutations[k].length !== nums.length ) {
                                        flag = true;
                                        break;
                                }
                        }
                        if( flag === false ) {
                                break;
                        }

                        let elementArray = temp_permutations.shift();
                        for( let j=0; j<temp.length; j++ ) {
                                if( ! ( elementArray.includes( temp[j] ) ) ) {
                                        let t = [ ...elementArray, temp[j] ];
                                        temp_permutations.push( t );
                                }
                        }
                }

                for( let g=0; g<temp_permutations.length; g++ ) {
                        permutations.push(temp_permutations[g]);
                }

        }
        return permutations;
};

console.log( permute( [1,2,3,4] ) );