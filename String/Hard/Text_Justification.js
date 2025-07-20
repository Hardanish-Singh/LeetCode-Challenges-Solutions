/*
        Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.
        You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
        Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
        For the last line of text, it should be left-justified and no extra space is inserted between words.

        Note:
                1) A word is defined as a character sequence consisting of non-space characters only.
                2) Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
                3) The input array words contains at least one word.
 

        Example 1:

                Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
                Output:
                [
                "This    is    an",
                "example  of text",
                "justification.  "
                ]
        Example 2:

                Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16
                Output:
                [
                "What   must   be",
                "acknowledgment  ",
                "shall be        "
                ]
                Explanation: Note that the last line is "shall be    " instead of "shall     be", because the last line must be left-justified instead of fully-justified. Note that the second line is also left-justified becase it contains only one word.
        Example 3:

                Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20
                Output:
                [
                "Science  is  what we",
                "understand      well",
                "enough to explain to",
                "a  computer.  Art is",
                "everything  else  we",
                "do                  "
                ]

        Constraints:

                1) 1 <= words.length <= 300
                2) 1 <= words[i].length <= 20
                3) words[i] consists of only English letters and symbols.
                4) 1 <= maxWidth <= 100
                4) words[i].length <= maxWidth
*/
function makeGreedyApproachSpaces(positions, c) {
    let greedySpaces = new Array(positions).fill(0);
    let I = 0;
    while (c-- > 0) {
        greedySpaces[I] = greedySpaces[I++] + 1;
        I === positions ? (I = 0) : null;
    }
    return greedySpaces;
}

function makeGreedyString(initial, g, arr, str) {
    let CC = 0;
    let temp = "";
    for (let k = initial; k < g; k++) {
        temp += str[k];
        if (arr[CC]) for (let p = 0; p < arr[CC]; p++) temp += " ";
        CC++;
    }
    return temp;
}

var fullJustify = function (str, len) {
    let sc = (positions = word_count = initial = 0);
    let temp = "";
    let output = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str[i].length; j++) {
            word_count++;
            if (word_count >= len) {
                let g;

                j < str[i].length - 1 ? (g = i--) : (g = i + 1);

                for (let k = initial; k < g; k++) {
                    sc += str[k].length;
                    positions++;
                }

                positions > 1 ? positions-- : null;

                let arr = makeGreedyApproachSpaces(positions, len - sc);

                let temp = makeGreedyString(initial, g, arr, str);

                initial = g;
                sc = positions = 0;
                output.push(temp);
                temp = "";
                word_count = -1;
                break;
            }
        }
        word_count++;
        if (i === str.length - 1 && word_count > 0) {
            sc = 0;
            for (let k = initial; k <= str.length - 1; k++) {
                if (k != str.length) temp += str[k] + " ";
            }
            sc = temp.length;
            for (let k = 0; k < len - sc; k++) temp += " ";
            output.push(temp);
        } else if (word_count === len) {
            for (let k = initial; k <= i; k++) {
                sc += str[k].length;
                positions++;
            }

            positions > 1 ? positions-- : null;

            let arr = makeGreedyApproachSpaces(positions, len - sc);

            let temp = makeGreedyString(initial, i + 1, arr, str);

            initial = i + 1;
            sc = positions = 0;
            output.push(temp);
            temp = "";
            word_count = 0;
        }
    }
    return output;
};
