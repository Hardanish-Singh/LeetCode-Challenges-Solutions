class TwoSum(object):

        def __init__(self):
                self.hash_table = { }

        def add(self, number):
                """
                :type number: int
                :rtype: None
                """
                if number in self.hash_table:
                        self.hash_table[ number ] = self.hash_table[ number ] + 1
                else:
                        self.hash_table[ number ] = 1


        def find(self, value):
                """
                :type value: int
                :rtype: bool
                """
                temp = { }
                for key, val in self.hash_table.items():
                        difference = value - key
                        if difference in self.hash_table and val == 2:
                                return True
                        elif difference in temp:
                                return True
                        else:
                                temp[ key ] = 1
                return False
                        
                
        


# Your TwoSum object will be instantiated and called as such:
# obj = TwoSum()
# obj.add(number)
# param_2 = obj.find(value)