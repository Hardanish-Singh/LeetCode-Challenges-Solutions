# Leetcode: https://leetcode.com/problems/two-sum-iii-data-structure-design/

class TwoSum:
        def __init__(self):
                self.numbers = []

        def add(self, number: int) -> None:
                self.numbers.append(number)

        def find(self, target: int) -> bool:
                hash_table = { }
                for i in range( 0, len( self.numbers ) ):
                        difference = target - self.numbers[ i ]
                        if difference in hash_table:
                                return True
                        else:
                                hash_table[ self.numbers[ i ] ] = True
                return False

# Your TwoSum object will be instantiated and called as such:
# obj = TwoSum()
# obj.add(number)
# param_2 = obj.find(value)