import java.util.Arrays;

// SOLUTION 1: BUBBLE SORT 

class Solution 
{
        public ListNode sortList(ListNode head) 
        {
                ListNode current = head;
                ListNode index = null;
                int temp;
        
                if (head == null) 
                {
                        return null;
                }
                else 
                {
                        while (current != null) 
                        {
                                index = current.next;
                                while (index != null) 
                                {
                                        if (current.val > index.val) 
                                        {
                                                temp = current.val;
                                                current.val = index.val;
                                                index.val = temp;
                                        }
                                        index = index.next;
                                }
                                current = current.next;
                        }
                }
                return head;
        }
}