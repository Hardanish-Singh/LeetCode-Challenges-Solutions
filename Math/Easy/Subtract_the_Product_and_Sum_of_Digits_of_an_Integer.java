class Solution 
{
        public int subtractProductAndSum(int n) 
        {
                int num = n;

                int sum = 0;
                int prod = 1;

                while(num > 0)
                {
                        int remainder = num % 10; 

                        prod *= remainder;  
                        sum += remainder;

                        num /= 10;
                }
                return prod - sum; 
        }
}