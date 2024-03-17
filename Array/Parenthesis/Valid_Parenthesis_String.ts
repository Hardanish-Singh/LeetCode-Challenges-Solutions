// Leetcode: https://leetcode.com/problems/valid-parenthesis-string/

const checkValidString = (str: string): boolean => {
    let openCount: number = 0;
    let closedCount: number = 0;

    for (let i: number = 0; i < str.length; i++) {
        if (str[i] == "*" || str[i] == "(") {
            openCount++;
        } else {
            openCount--;
        }
        if (openCount < 0) {
            return false;
        }
    }

    for (let i: number = str.length - 1; i >= 0; i--) {
        if (str[i] == "*" || str[i] == ")") {
            closedCount++;
        } else {
            closedCount--;
        }
        if (closedCount < 0) {
            return false;
        }
    }

    return true;
};
