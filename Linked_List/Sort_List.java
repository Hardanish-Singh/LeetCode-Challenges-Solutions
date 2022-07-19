import java.util.Arrays;

// SOLUTION 1: BUBBLE SORT 

class Solution 
{
        public ListNode sortList(ListNode head) 
        {
                ListNode current = head;
                ListNode index = null;
                
                if (head == null) 
                {
                        return null;
                }

                while (current != null) 
                {
                        index = current.next;
                        while (index != null) 
                        {
                                if (current.val > index.val) 
                                {
                                        swapNodes( current, index );
                                }
                                index = index.next;
                        }
                        current = current.next;
                }
                return head;
        }

        public void swapNodes( ListNode node1, ListNode node2 )
        {
                int temp = node1.val;
                node1.val = node2.val;
                node2.val = temp;
        }
}