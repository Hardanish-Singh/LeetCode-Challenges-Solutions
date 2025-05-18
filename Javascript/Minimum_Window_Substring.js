// Leetcode: https://leetcode.com/problems/minimum-window-substring/

/**
 * Finds the smallest substring of 's' that contains all characters from 't'.
 *
 * @param {string} s The string to search within.
 * @param {string} t The string containing the characters to find.
 * @return {string} The smallest substring of 's' that contains all characters from 't'.
 * Returns "" if no such substring exists.
 */
const minWindow = (s, t) => {
    // If 't' is longer than 's', no window in 's' can contain 't'.
    if (t.length > s.length) {
        return "";
    }

    // 1. Count the frequency of each character in 't'.
    const targetCharCounts = new Map();
    for (const char of t) {
        targetCharCounts.set(char, (targetCharCounts.get(char) || 0) + 1);
    }

    const requiredChars = targetCharCounts.size; // Number of unique characters in 't'.

    // 2. Initialize variables to track the sliding window.
    let windowStart = 0;
    let windowEnd = 0;
    let formedChars = 0; // Counts how many required chars are satisfied in the window.
    const windowCharCounts = new Map(); // Counts chars in the current window.
    let minWindowStart = -1; // Start index of the smallest window found.
    let minWindowLength = Infinity; // Length of the smallest window found.

    // 3. Slide the window through 's'.
    while (windowEnd < s.length) {
        const currentChar = s[windowEnd]; // The character at the right edge of the window.
        windowCharCounts.set(currentChar, (windowCharCounts.get(currentChar) || 0) + 1);

        // If this character is needed and its count is satisfied, update formedChars.
        if (
            targetCharCounts.has(currentChar) &&
            windowCharCounts.get(currentChar) === targetCharCounts.get(currentChar)
        ) {
            formedChars++;
        }

        // 4. Shrink the window if it contains all required characters.
        while (formedChars === requiredChars) {
            const currentWindowLength = windowEnd - windowStart + 1;

            // Update the minimum window if a smaller one is found.
            if (currentWindowLength < minWindowLength) {
                minWindowLength = currentWindowLength;
                minWindowStart = windowStart;
            }

            const startChar = s[windowStart]; // The character at the left edge of the window.
            windowCharCounts.set(startChar, windowCharCounts.get(startChar) - 1); // Reduce its count.

            // If removing this character makes the window no longer satisfy 't', update formedChars.
            if (targetCharCounts.has(startChar) && windowCharCounts.get(startChar) < targetCharCounts.get(startChar)) {
                formedChars--;
            }

            windowStart++; // Move the left edge to shrink the window.
        }

        windowEnd++; // Expand the window to the right.
    }

    // 5. Return the result.
    return minWindowStart === -1 ? "" : s.substring(minWindowStart, minWindowStart + minWindowLength);
};
