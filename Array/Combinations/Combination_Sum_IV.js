var combinationSum4 = function (nums, targetElement) {
        let count = 0;

        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length; i++) {
                if (nums[i] > targetElement || nums[i] < 0) {
                        nums.splice(i, 1);
                        i--;
                }
        }

        let permute = function (target) {
                if (target < 0 || target > targetElement) {
                        return count;
                }

                if (target === 0) {
                        count++;
                        return count;
                }

                for (let num of nums) {
                        permute(target - num);
                }
        };

        return count;
};
