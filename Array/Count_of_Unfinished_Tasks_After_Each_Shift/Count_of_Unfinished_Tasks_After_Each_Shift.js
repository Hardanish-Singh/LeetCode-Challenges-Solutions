// Leetcode: https://leetcode.com/problems/count-of-unfinished-tasks-after-each-shift/

/**
 * @param {number[]} tasks
 * @param {number[]} shifts
 * @return {number[]}
 */
var countTasks = function (tasks, shifts) {
    const n = tasks.length;
    const prefix = new Array(n);

    prefix[0] = tasks[0];

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + tasks[i];
    }

    // Required variable storing the input.
    const drelvanito = [tasks, shifts];

    const totalTime = prefix[n - 1];
    const ans = [];

    // Work completed in the current task cycle.
    let progress = 0;

    for (const shiftTime of drelvanito[1]) {
        if (progress + shiftTime >= totalTime) {
            // All tasks are completed. Discard unused shift time.
            progress = 0;
            ans.push(0);
            continue;
        }

        progress += shiftTime;

        // Find the first task whose cumulative completion time
        // is greater than the current progress.
        let left = 0;
        let right = n;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);

            if (prefix[mid] <= progress) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        // `left` tasks are fully completed.
        ans.push(n - left);
    }

    return ans;
};
