import java.util.Arrays;

// SOLUTION 1: BUBBLE SORT 

class Solution 
{
        public ListNode sortList(ListNode head) 
        {
                ListNode current = head;
                
                if (head == null) 
                {
                        return null;
                }

                while (current != null) 
                {
                        ListNode next = current.next;
                        while (next != null) 
                        {
                                if (current.val > next.val) 
                                {
                                        swapNodes( current, next );
                                }
                                next = next.next;
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

// SOLUTION 2: USING ADDITIONAL DATA STRUCTURE ARRAY