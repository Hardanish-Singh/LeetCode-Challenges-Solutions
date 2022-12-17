var combinationSum4 = function (nums, target) {
        let count = 0;

        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length; i++) {
                if (nums[i] > target || nums[i] < 0) {
                        nums.splice(i, 1);
                        i--;
                }
        }

        let permute = function (sum = 0) {
                if (sum < 0 || sum > target) {
                        return count;
                }

                if (sum === target) {
                        count++;
                        return count;
                }

                for (let num of nums) {
                        permute(sum + num);
                }
        };

        permute();
        return count;
};
