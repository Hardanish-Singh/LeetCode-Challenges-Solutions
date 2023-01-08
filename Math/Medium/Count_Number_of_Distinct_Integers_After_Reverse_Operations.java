class Solution
{
        public int countDistinctIntegers(int[] nums)
        {
                Set<Integer>st=new HashSet<>();

                for(int i=0;i<nums.length;i++)
                {
                        st.add(nums[i]);
                        st.add(reverse(nums[i]));
                }

                return st.size();
        }

        public static int reverse(int num)
        {
                String strNum = Integer.toString(num);
                StringBuilder sb = new StringBuilder();

                for(int i = strNum.length() - 1; i >= 0; i--)
                {
                        sb.append(strNum.charAt(i));
                }

                return Integer.parseInt(sb.toString());
        }
}