// Leetcode: https://leetcode.com/problems/string-compression/

var compress = function (chars: Array<String>): number {
        for (let i: number = 0; i < chars.length; i++) {
                let charCount: number = 1;
                for (let j: number = i + 1; j < chars.length; j++) {
                        if (chars[i] === chars[j]) {
                                charCount++;
                        } else {
                                break;
                        }
                }
                if (charCount === 1) {
                        continue;
                }
                let index: number = -1;
                if (charCount > 9) {
                        index = RemoveDuplicateCharactersAndAddGroupCount(chars, index, i);
                        for (let k: number = 0; k < String(charCount).length; k++) {
                                chars.splice(index, 0, String(charCount)[k]);
                                i = index;
                                index++;
                        }
                } else {
                        index = RemoveDuplicateCharactersAndAddGroupCount(chars, index, i);
                        chars.splice(index, 0, String(charCount));
                        i = index;
                }
        }
        return chars.length;
};

function RemoveDuplicateCharactersAndAddGroupCount(...args: Array<any>): number {
        let [chars, index, i] = args;
        for (let k: number = i; k < chars.length; k++) {
                if (chars[k] !== chars[k + 1]) {
                        index = k + 1;
                        break;
                }
        }
        let splicingIndex: number = Math.abs(i + 1 - (index - 1)) + 1;
        if (splicingIndex === 0) {
                splicingIndex = 1;
        }
        chars.splice(i + 1, splicingIndex);
        index = i + 1;
        return index;
}
