// Leetcode: https://leetcode.com/problems/remove-invalid-parentheses/

type Paranthesis = {
        [key: string]: boolean;
};

/**
 * @param { string } str
 * @param { number } minimumNumberOfBracketsToBeRemoved
 * @param { Set<string> } hash_set
 * @param { Paranthesis } isVisited
 * @return { number }
 */

function generateValidParenthesis(
        str: string,
        minimumNumberOfBracketsToBeRemoved: number,
        hash_set: Set<string>,
        isVisited: Paranthesis
): void {
        if (minimumNumberOfBracketsToBeRemoved === 0) {
                // CHECK IF THE STRING IS VALID
                if (getMinimumNumberOfBracketsToBeRemoved(str) === 0) {
                        hash_set.add(str);
                }
                return;
        }
        for (let i: number = 0; i < str.length; i++) {
                let left: string = str.slice(0, i);
                let right: string = str.slice(i + 1);
                if (!isVisited[left + right]) {
                        isVisited[left + right] = true;
                        generateValidParenthesis(
                                left + right,
                                minimumNumberOfBracketsToBeRemoved - 1,
                                hash_set,
                                isVisited
                        );
                }
        }
}

/**
 * @param { string } str
 * @return { number }
 */

function getMinimumNumberOfBracketsToBeRemoved(str: string): number {
        let stack: Array<string> = [];
        for (let i: number = 0; i < str.length; i++) {
                let bracket: string = str[i];
                if (bracket === "(") {
                        stack.push(bracket);
                } else if (bracket === ")") {
                        if (stack[stack.length - 1] === "(") {
                                stack.pop();
                        } else {
                                stack.push(bracket);
                        }
                }
        }
        return stack.length;
}

/**
 * @param { string } s
 * @return { string[] }
 */

var removeInvalidParentheses = function (s: string): Array<string> {
        let minimumNumberOfBracketsToBeRemoved: number = getMinimumNumberOfBracketsToBeRemoved(s);
        let hash_set: Set<string> = new Set<string>();
        let isVisited: Paranthesis = {};
        generateValidParenthesis(s, minimumNumberOfBracketsToBeRemoved, hash_set, isVisited);
        return Array.from(hash_set);
};
