var maxScoreIndices = function(nums) {
        let hash_table = {

        };
        let left = 0;
        let right = nums.filter( n => n === 1 ).length;
        let score = left + right;
        hash_table[score] = [0];   
        let max = score;
    
        for( let i = 0; i < nums.length; i++ ) {
                nums[i] == 0 ? left++ : right--;
                score = left + right;
                if( hash_table[score] ) {
                        let data =  hash_table[score];
                        data.push(i+1);
                        hash_table[score] = data;
                } 
                else {
                        hash_table[score] = [i+1];       
                }
                if( score > max ) {
                        max = score;
                }
        }

        return hash_table[max];
};