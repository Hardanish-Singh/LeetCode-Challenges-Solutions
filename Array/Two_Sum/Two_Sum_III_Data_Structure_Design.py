# Leetcode: https://leetcode.com/problems/two-sum-iii-data-structure-design/

class TwoSum( object ):

        def __init__( self ):
                self.hash_table = { }

        def add( self, number ):
                """
                :type number: int
                :rtype: None
                """
                if number in self.hash_table:
                        self.hash_table[ number ] = self.hash_table[ number ] + 1
                else:
                        self.hash_table[ number ] = 1

        def find( self, target ):
                """
                :type target: int
                :rtype: bool
                """
                dictionary = { }
                for key, value in self.hash_table.items():
                        difference = target - key
                        if ( difference in self.hash_table and value == 2 ) or ( difference in dictionary ):
                                return True
                        else:
                                dictionary[ key ] = 1
                return False