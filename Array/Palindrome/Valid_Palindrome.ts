// SOLUTION 1
var isPalindrome = (str: string): boolean =>
    str.toLowerCase().replace(/[^0-9a-z]/gi, "") ===
    str
        .toLowerCase()
        .replace(/[^0-9a-z]/gi, "")
        .split("")
        .reverse()
        .join("");

// SOLUTION 2
var isPalindrome = (str: string): boolean => {
    str = str.toLowerCase().replace(/[^0-9a-z]/gi, "");
    let leftPointer = 0;
    let rightPointer = str.length - 1;
    while (leftPointer <= rightPointer) {
        if (str[leftPointer] !== str[rightPointer]) {
            return false;
        }
        leftPointer++;
        rightPointer--;
    }
    return true;
};
