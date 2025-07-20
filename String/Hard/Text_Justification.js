// Leetcode: https://leetcode.com/problems/text-justification/

/**
 * Distributes extra spaces evenly among gaps between words
 * @param {number} gaps - Number of gaps between words
 * @param {number} extraSpaces - Number of extra spaces to distribute
 * @returns {number[]} Array containing number of spaces for each gap
 */
function distributeSpaces(gaps, extraSpaces) {
    const spacesPerGap = new Array(gaps).fill(0);
    let currentGap = 0;

    while (extraSpaces > 0) {
        spacesPerGap[currentGap]++;
        currentGap = (currentGap + 1) % gaps;
        extraSpaces--;
    }

    return spacesPerGap;
}

/**
 * Creates a justified line by adding appropriate spaces between words
 * @param {string[]} words - Array of words
 * @param {number} startIndex - Starting index in words array
 * @param {number} endIndex - Ending index in words array
 * @param {number[]} spacesArray - Array of spaces to add between words
 * @returns {string} Justified line
 */
function createJustifiedLine(words, startIndex, endIndex, spacesArray) {
    let line = "";
    let spaceIndex = 0;

    for (let i = startIndex; i < endIndex; i++) {
        line += words[i];

        // Add spaces after word (except for last word)
        if (i < endIndex - 1) {
            const spacesToAdd = spacesArray[spaceIndex] || 0;
            line += " ".repeat(spacesToAdd + 1); // +1 for minimum space
            spaceIndex++;
        }
    }

    return line;
}

/**
 * Creates the last line (left-justified) with padding
 * @param {string[]} words - Array of words
 * @param {number} startIndex - Starting index in words array
 * @param {number} maxWidth - Maximum width of the line
 * @returns {string} Left-justified line with padding
 */
function createLastLine(words, startIndex, maxWidth) {
    let line = "";

    // Join remaining words with single spaces
    for (let i = startIndex; i < words.length; i++) {
        if (i > startIndex) line += " ";
        line += words[i];
    }

    // Pad with spaces to reach maxWidth
    while (line.length < maxWidth) {
        line += " ";
    }

    return line;
}

/**
 * Calculates total length of words in a range
 * @param {string[]} words - Array of words
 * @param {number} startIndex - Starting index
 * @param {number} endIndex - Ending index
 * @returns {number} Total character count
 */
function getTotalWordLength(words, startIndex, endIndex) {
    let totalLength = 0;
    for (let i = startIndex; i < endIndex; i++) {
        totalLength += words[i].length;
    }
    return totalLength;
}

/**
 * Main function to justify text
 * @param {string[]} words - Array of words to justify
 * @param {number} maxWidth - Maximum width of each line
 * @returns {string[]} Array of justified lines
 */
var fullJustify = function (words, maxWidth) {
    const result = [];
    let currentLineStart = 0;

    while (currentLineStart < words.length) {
        // Find words that fit in current line
        let currentLineEnd = currentLineStart;
        let currentLineLength = 0;

        // Add words while they fit (including minimum spaces)
        while (currentLineEnd < words.length) {
            const wordLength = words[currentLineEnd].length;
            const spacesNeeded = currentLineEnd > currentLineStart ? 1 : 0;

            if (currentLineLength + spacesNeeded + wordLength > maxWidth) {
                break;
            }

            currentLineLength += spacesNeeded + wordLength;
            currentLineEnd++;
        }

        // Handle last line (left-justify)
        if (currentLineEnd === words.length) {
            result.push(createLastLine(words, currentLineStart, maxWidth));
            break;
        }

        // Handle single word in line
        if (currentLineEnd - currentLineStart === 1) {
            let line = words[currentLineStart];
            while (line.length < maxWidth) {
                line += " ";
            }
            result.push(line);
        } else {
            // Justify line with multiple words
            const wordsInLine = currentLineEnd - currentLineStart;
            const gaps = wordsInLine - 1;
            const totalWordLength = getTotalWordLength(words, currentLineStart, currentLineEnd);
            const totalSpaces = maxWidth - totalWordLength;
            const extraSpaces = totalSpaces - gaps; // Subtract minimum spaces

            const spacesDistribution = distributeSpaces(gaps, extraSpaces);
            const justifiedLine = createJustifiedLine(words, currentLineStart, currentLineEnd, spacesDistribution);
            result.push(justifiedLine);
        }

        currentLineStart = currentLineEnd;
    }

    return result;
};
