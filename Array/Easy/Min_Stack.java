// Leetcode: https://leetcode.com/problems/min-stack/

import java.util.ArrayList;

class MinStack 
{
        ArrayList<Integer> stack = null;
        public MinStack() 
        {
                stack = new ArrayList<Integer>();
        }

        public void push(int val) 
        {
                stack.add(val);
        }

        public void pop() 
        {
                stack.remove(stack.size() - 1);
        }

        public int top() 
        {
                return stack.get(stack.size() - 1);
        }

        public int getMin() 
        {
                int minimum = stack.get(0);
                for (int i = 1; i < stack.size(); i++) 
                {
                        if (minimum > stack.get(i)) 
                        {
                                minimum = stack.get(i);
                        }
                }
                return minimum;
        }
}