// Leetcode: https://leetcode.com/problems/faulty-keyboard

const finalString = (s: string): string => {
    let stringOnLaptopScreen = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "i") {
            stringOnLaptopScreen = stringOnLaptopScreen.split("").reverse().join("");
        } else {
            stringOnLaptopScreen += s[i];
        }
    }

    return stringOnLaptopScreen;
};
