class Solution:
        def change(self, amount: int, coins: List[int]) -> int:
                if amount <= 0:
                        return 1
                if len(coins) == 0:
                        return 0  
                
                cache = {}
                coins.sort()
                stack = [[0, 0, 'PROCESSING']]
                
                while stack:
                        currentsum, index, instruction = stack.pop()
                        newsum = currentsum + coins[index]
                        if currentsum == amount:
                                cache[(currentsum, index)] = 1
                        elif instruction == 'PROCESSING':
                                stack.append([currentsum, index, 'PROCESSED'])
                                if (index+1) < len(coins) and (currentsum, index+1) not in cache.keys():
                                        stack.append([currentsum, index+1, 'PROCESSING'])
                                if newsum <= amount and (newsum, index) not in cache.keys():
                                        stack.append([newsum, index, 'PROCESSING'])
                        elif instruction == 'PROCESSED':
                                cache[(currentsum, index)] = ( cache.get((newsum, index)) or 0 ) + ( cache.get((currentsum, index+1)) or 0 )
                
                return cache[(0,0)]