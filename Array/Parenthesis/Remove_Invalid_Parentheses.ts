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
        let queue: Array<[string, number]> = [[str, minimumNumberOfBracketsToBeRemoved]];
        while (queue.length > 0) {
                let [string, count] = queue.shift();
                if (count === 0) {
                        // CHECK IF THE STRING IS VALID
                        if (getMinimumNumberOfBracketsToBeRemoved(string) === 0) {
                                hash_set.add(string);
                        }
                }
                for (let i = 0; i < string.length; i++) {
                        let left: string = string.slice(0, i);
                        let right: string = string.slice(i + 1);
                        if (!isVisited[left + right] && count - 1 >= 0) {
                                isVisited[left + right] = true;
                                queue.push([left + right, count - 1]);
                        }
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
