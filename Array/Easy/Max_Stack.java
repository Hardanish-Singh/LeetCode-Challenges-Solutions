/*
        Design a max stack data structure that supports the stack operations and supports finding the stack's maximum element.
        
        Implement the MaxStack class:
                1) MaxStack() Initializes the stack object.
                2) void push(int x) Pushes element x onto the stack.
                3) int pop() Removes the element on top of the stack and returns it.
                4) int top() Gets the element on the top of the stack without removing it.
                5) int peekMax() Retrieves the maximum element in the stack without removing it.
                6) int popMax() Retrieves the maximum element in the stack and removes it. If there is more than one maximum element, only remove the top-most one.
        
        Example 1:
                Input:
                        ["MaxStack", "push", "push", "push", "top", "popMax", "top", "peekMax", "pop", "top"]
                        [[], [5], [1], [5], [], [], [], [], [], []]
                Output:
                        [null, null, null, null, 5, 5, 1, 5, 1, 5]

                Explanation:
                        MaxStack stk = new MaxStack();
                        stk.push(5);   // [5] the top of the stack and the maximum number is 5.
                        stk.push(1);   // [5, 1] the top of the stack is 1, but the maximum is 5.
                        stk.push(5);   // [5, 1, 5] the top of the stack is 5, which is also the maximum, because it is the top most one.
                        stk.top();     // return 5, [5, 1, 5] the stack did not change.
                        stk.popMax();  // return 5, [5, 1] the stack is changed now, and the top is different from the max.
                        stk.top();     // return 1, [5, 1] the stack did not change.
                        stk.peekMax(); // return 5, [5, 1] the stack did not change.
                        stk.pop();     // return 1, [5] the top of the stack and the max element is now 5.
                        stk.top();     // return 5, [5] the stack did not change.
        
        Constraints:
                1) -10^7 <= x <= 10^7
                2) At most 10^4 calls will be made to push, pop, top, peekMax, and popMax.
                3) There will be at least one element in the stack when pop, top, peekMax, or popMax is called.

*/

import java.util.*;

class MaxStack 
{
        ArrayList<Integer> stack = null;
        public MaxStack() 
        {
                stack = new ArrayList<Integer>();
        }

        public void push(int x)
        {
                stack.add( x );
        }

        public int pop() 
        {
                return stack.remove( stack.size() - 1 );
        }

        public int top() 
        {
                return stack.get( stack.size() - 1 );
        }

        public int peekMax() 
        {
                int maximum = stack.get(0);
                for (int i = 1; i < stack.size(); i++) {
                        if (maximum < stack.get(i)) {
                                maximum = stack.get(i);
                        }
                }
                return maximum;
        }

        public int popMax() 
        {
                int maximum = stack.get(0);
                int index = 0;
                for (int i = 1; i < stack.size(); i++) {
                        if (maximum <= stack.get(i)) {
                                maximum = stack.get(i);
                                index = i;
                        }
                }
                return stack.remove( index );
        }
}

/*
 * Your MaxStack object will be instantiated and called as such:
 * MaxStack obj = new MaxStack();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.peekMax();
 * int param_5 = obj.popMax();
*/