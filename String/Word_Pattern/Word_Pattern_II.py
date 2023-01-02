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

    def wordPatternMatch(self, pattern: str, s: str) -> bool:
        lp, ls = len(pattern), len(s)
        combinations = []
        
        for nums in itertools.combinations(range(1, ls), lp-1):
            nums += (ls,)
            temp = []
            index = 0
            for i in range(len(nums)):
                temp.append(s[index:nums[i]])
                index = nums[i]
            combinations.append(temp)

        for item in combinations:
            if(self.wordPattern(pattern, ' '.join(item))):
                return True
        
        return False