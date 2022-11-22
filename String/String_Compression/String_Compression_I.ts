function compress(chars: string[]): number {
        chars.push("+-");
        let i = 0;

        while (chars[i] != "+-") {
                let j = i;
                let count = 1;
                while (chars[j] == chars[j + 1]) {
                        count++;
                        j++;
                }
                chars.push(chars[i]);
                count > 1 && chars.push(...String(count).split(""));
                i = j + 1;
        }
        let index = chars.indexOf("+-");
        if (chars[index + 1] == null) {
                chars.splice(index, 1);
        } else {
                for (let i = index; i >= 0; i--) {
                        chars.splice(i, 1);
                }
        }
        return chars.length;
}
