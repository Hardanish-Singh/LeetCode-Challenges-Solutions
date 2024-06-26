# Leetcode: https://leetcode.com/problems/next-permutation/

class Solution:
    def nextPermutation(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        
        Step-1) Find The element and its index (say i) which is JUST SMALLER THAN ITS LATER (from n-2 to 0)
        Step-2) Find the element which is JUST GREATER THAN that element (from n-1 to 0)
        Step-3) Swap the elements.
        Step-4) Now reverse the element from (i+1th to end index)
        """
        index = -1
        # this loop finds the index of the element which is just smaller than its later element
        for i in range(len(nums)-2, -1, -1):
            if (nums[i] < nums[i + 1]):
                index = i
                break
        else:
            nums.sort()
            return
        # this loop finds the element which is just greater than that element and swaps them
        for j in range(len(nums)-1, index, -1):
            if (nums[j] > nums[index]):
                nums[index], nums[j] = nums[j], nums[index]
                break
        # this line reverses the element from (i+1th to end index) and converts it to list
        nums[index+1:] = list(reversed(nums[index+1:]))