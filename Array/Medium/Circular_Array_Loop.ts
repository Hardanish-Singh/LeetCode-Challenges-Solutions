// Leetcode: https://leetcode.com/problems/circular-array-loop/

/*
    This question is fun, but the explanation is not so great. Basically, each spot in nums represents the number of steps you should take forward or backward in the array. A negative represents going left in nums, a positive represents going right. If we go outside the indexing range of the array, loop back to the other side. So if we go too far right (index == nums.Length) we loop back to index == 0. If we go too far left (index == -1) we loop back to index == nums.Length - 1.

    We are searching for a starting index in nums where, starting from that point, we follow the steps and it takes us in a full loop back to where we started. However the direction of the steps in the cycle must either be going ALL RIGHT (positive) or ALL LEFT (negative). If we start with a negative number and then encounter a positive, the cycle is considered invalidated.

    Finally, the cycle must land at more than 1 index. In other words [0, 0, 0, 0, 5] is not considered a valid cycle because 5 loops back to itself, and every other index doesn't go anywhere but itself. So even though 5 does cycle back to 5, it only ever "touches" 1 index in that cycle.

    If we can find an index that has a cycle, going always in one direction, and that lands on more than just 1 index, we can return true.

    If we check every index in nums and conclude that no starting index has a valid cycle according to the above criteria, we can return false.
*/

const circularArrayLoop = (nums: number[]): boolean => {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        let map = new Map();
        map.set(i, nums[i]);
        let currentIndex = i;

        while (true) {
            const jumpedIndex = nums[currentIndex];
            currentIndex = (currentIndex + jumpedIndex) % n;
            if (currentIndex < 0) {
                currentIndex = currentIndex + n;
            }
            // If current value is positive and jumpedIndex value is negative or current value is negative and jumpedIndex value is negative, then we need to break the loop
            if ((nums[i] > 0 && jumpedIndex < 0) || (nums[i] < 0 && jumpedIndex > 0)) {
                break;
            }

            if (map.has(currentIndex)) {
                // We have a cycle and we have visited atleast one of the nodes apart from the current node
                if (i === currentIndex && Array.from(map.keys()).length > 1) {
                    return true;
                } else {
                    break;
                }
            }

            map.set(currentIndex, jumpedIndex);
        }
    }
    return false;
};
