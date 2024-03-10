class Solution:
    def nextPermutation(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        
        Step-1) Find The element and its index (say i) which is JUST SMALLER THAN ITS LATER (from n-2 to 0)
        Step-2) Find the element which is JUST GREATER THAN that element (from n-1 to 0)
        Step-3) Swap the elements.
        Step-4) Now sort the element from (i+1th to end index)
        """
        index = -1
        for i in range(len(nums)-2, -1, -1):
            if (nums[i] < nums[i + 1]):
                index = i
                break
        else:
            nums.sort()
            return
        for j in range(len(nums)-1, index, -1):
            if (nums[j] > nums[index]):
                nums[index], nums[j] = nums[j], nums[index]
                break
        
        nums[index+1:] = list(reversed(nums[index+1:]))