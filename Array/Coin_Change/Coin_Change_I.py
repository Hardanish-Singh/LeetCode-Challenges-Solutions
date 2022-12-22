# Leetcode: https://leetcode.com/problems/coin-change/

class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        stack = [[amount, []]]
        seen = set([amount])
        
        while stack:
            amountInHand, num_coins = stack.pop(0)
            if amountInHand == 0:
                    return len(num_coins)
            else:
                for coin in coins:
                    remainder = amountInHand - coin
                    if remainder >= 0 and remainder not in seen:
                        stack.append([remainder, num_coins + [coin]])
                        seen.add(remainder)
                    
        return -1