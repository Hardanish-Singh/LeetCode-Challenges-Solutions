class Solution:
    def nextGreaterElement(self, n: int) -> int:
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
        return nextGreaterNumber if nextGreaterNumber < 2147483648 else -1