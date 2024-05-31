# Leetcode: https://leetcode.com/problems/next-greater-element-iii/

class Solution:
    def nextGreaterElement(self, n: int) -> int:
        """        
        Step-1) Find The element and its index (say i) which is JUST SMALLER THAN ITS LATER (from n-2 to 0)
        Step-2) Find the element which is JUST GREATER THAN that element (from n-1 to 0)
        Step-3) Swap the elements.
        Step-4) Now reverse the element from (i+1th to end index)
        """
        # this line converts the number to a list of digits
        nums = list(map(int, str(n)))
        index = -1
        # this loop finds the index of the element which is just smaller than its later element
        for i in range(len(nums)-2, -1, -1):
            if (nums[i] < nums[i + 1]):
                index = i
                break
        else:
            return -1
        # this loop finds the element which is just greater than that element and swaps them
        for j in range(len(nums)-1, index, -1):
            if (nums[j] > nums[index]):
                nums[index], nums[j] = nums[j], nums[index]
                break
        # this line reverses the element from (i+1th to end index) and converts it to list
        nums[index+1:] = list(reversed(nums[index+1:]))
        # this line converts the list to a number
        nextGreaterNumber = int(''.join(map(str, nums)))
        # this line checks if the number is greater than 2 ** 31 or not and returns -1 if it is greater than 2 ** 31
        return nextGreaterNumber if nextGreaterNumber < 2 ** 31 else -1