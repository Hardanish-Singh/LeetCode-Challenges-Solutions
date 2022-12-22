class Solution:
        def change(self, amount: int, coins: List[int]) -> int:
                if amount <= 0:
                        return 1
                if len(coins) == 0:
                        return 0  
                
                cache = {}
                coins.sort() 
                
                #currentsum, index, instruction
                stack = [[0, 0, 'ENTER']]
                
                while stack:
                        currentsum, index, instruction = stack.pop()
                        newsum = currentsum + coins[index]
                        if currentsum == amount:
                                cache[(currentsum, index)] = 1
                        elif instruction == 'ENTER':
                                stack.append([currentsum, index, 'EXIT'])
                                if (index+1) < len(coins) and (currentsum, index+1) not in cache.keys():
                                        stack.append([currentsum, index+1, 'ENTER'])
                        
                                if newsum <= amount and (newsum, index) not in cache.keys():
                                        stack.append([newsum, index, 'ENTER'])
                        elif instruction == 'EXIT':
                                cache[(currentsum, index)] = ( cache.get((newsum, index)) or 0 ) + ( cache.get((currentsum, index+1)) or 0 )
                
                return cache[(0,0)]