class Solution:
        def wordPattern(self, pattern: str, s: str) -> bool:
                map = { }
                str = s.split(" ")

                if len(str) != len(pattern):
                        return False

                for i in range(0, len(pattern)):
                        if map.get(pattern[i]) and map.get(pattern[i]) != str[i]:
                        return False
                        else:
                        map[pattern[i]] = str[i]

                return len(map.values()) == len(set(map.values()))