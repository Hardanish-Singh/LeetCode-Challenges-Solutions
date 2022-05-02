/*
        Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
        
        Implement the MinStack class:
                1) MinStack() initializes the stack object.
                2) void push(int val) pushes the element val onto the stack.
                3) void pop() removes the element on the top of the stack.
                4) int top() gets the top element of the stack.
                5) int getMin() retrieves the minimum element in the stack.
        
        Example 1:
                Input: 
                        ["MinStack", "push", "push", "push", "getMin", "pop", "top","getMin"]
                        [[], [-2], [0], [-3], [], [], [], []]

                Output:
                        [null, null, null, null, -3, null, 0, -2]

                Explanation:
                        MinStack minStack = new MinStack();
                        minStack.push(-2);
                        minStack.push(0);
                        minStack.push(-3);
                        minStack.getMin(); // return -3
                        minStack.pop();
                        minStack.top();    // return 0
                        minStack.getMin(); // return -2
        
        Constraints:
                1) -2^31 <= val <= 2^31 - 1
                2) Methods pop, top and getMin operations will always be called on non-empty stacks.
                3) At most 3 * 10^4 calls will be made to push, pop, top, and getMin.
*/

import java.util.*;

class MinStack 
{
        ArrayList<Integer> stack = null;
        public MinStack() 
        {
                stack = new ArrayList<Integer>();
        }
    
        public void push(int val) 
        {
                stack.add( val );
        }

        public void pop() 
        {
                stack.remove( stack.size() - 1 );
        }

        public int top() 
        {
                return stack.get( stack.size() - 1 );
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

/*
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
*/