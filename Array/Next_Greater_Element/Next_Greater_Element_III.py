# Leetcode: https://leetcode.com/problems/next-greater-element-iii/

class Solution:
    def nextGreaterElement(self, n: int) -> int:
        """        
        Step-1) Find The element and its index (say i) which is JUST SMALLER THAN ITS LATER (from n-2 to 0)
        Step-2) Find the element which is JUST GREATER THAN that element (from n-1 to 0)
        Step-3) Swap the elements.
        Step-4) Now reverse the element from (i+1th to end index)
        """
        nums = list(map(int, str(n)))
        index = -1
        for i in range(len(nums)-2, -1, -1):
            if (nums[i] < nums[i + 1]):
                index = i
                break
        else:
            return -1
        for j in range(len(nums)-1, index, -1):
            if (nums[j] > nums[index]):
                nums[index], nums[j] = nums[j], nums[index]
                break
        
        nums[index+1:] = list(reversed(nums[index+1:]))
        nextGreaterNumber = int(''.join(map(str, nums)))
        return nextGreaterNumber if nextGreaterNumber < 2 ** 31 else -1