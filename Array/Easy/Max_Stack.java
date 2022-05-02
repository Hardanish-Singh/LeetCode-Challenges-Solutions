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