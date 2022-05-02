import java.util.*;

class MinStack {
        ArrayList<Integer> stack = null;
        public MinStack() {
                stack = new ArrayList<Integer>();
        }
    
        public void push(int val) {
                stack.add( val );
        }

        public void pop() {
                stack.remove( stack.size() - 1 );
        }

        public int top() {
                return stack.get( stack.size() - 1 );
        }

        public int getMin() {
                int minimum = stack.get(0);
                for (int i = 1; i < stack.size(); i++) {
                        if (minimum > stack.get(i)) {
                                minimum = stack.get(i);
                        }
                }
                return minimum;
        }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */