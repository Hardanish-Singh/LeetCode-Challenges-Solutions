function checkValidString(s: string): boolean {
        let openCount = 0;
        let closedCount = 0;
        for (let i: number = 0; i < s.length; i++) {
                if (s[i] == "*" || s[i] == "(") openCount++;
                else openCount--;
                if (openCount < 0) {
                        return false;
                }
        }

        for (let i: number = s.length - 1; i >= 0; i--) {
                if (s[i] == "*" || s[i] == ")") closedCount++;
                else closedCount--;
                if (closedCount < 0) {
                        return false;
                }
        }
        return true;
}
