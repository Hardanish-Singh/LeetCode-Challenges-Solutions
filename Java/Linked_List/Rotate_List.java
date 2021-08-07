/*
        Given the head of a linked list, rotate the list to the right by k places.

        Example 1:
                        head: 1 → 2 → 3 → 4 → 5
                        k: 2

                        Rotate 1: 5 → 1 → 2 → 3 → 4
                        Rotate 2: 4 → 5 → 1 → 2 → 3
        
        Example 2:
                        head: 0 → 1 → 2
                        k: 4

                        Rotate 1: 2 → 0 → 1
                        Rotate 2: 1 → 2 → 0
                        Rotate 3: 0 → 1 → 2
                        Rotate 4: 2 → 0 → 1
        
        Constraints:

                        1) The number of nodes in the list is in the range [0, 500].
                        2) -100 <= Node.val <= 100
                        3) 0 <= k <= 2 * 1000000000
*/
/*
        // Definition for Singly-Linked List
        public class ListNode
	{
                int val;
                ListNode next;
                public ListNode()
                {
                }
                public ListNode( int val )
                {
                        this.val = val;
                }
                public ListNode( int val, ListNode next )
                {
                        this.val = val;
                        this.next = next;
                }
        }
*/

class Solution 
{
        public ListNode rotateRight( ListNode head, int k ) 
        {
                // VALIDATION/SANITY CHECK
                if( head == null )
                {
                        return null;
                }
                
                // STORE THE REFERENCE OF HEAD NODE
                ListNode h = head;
                int count = 1;
                while( head.next != null )
                {
                        count++;
                        head = head.next;
                }
                // UPDATE k
                k = k % count;
                // RESTORE HEAD NODE REFERENCE BACK
                head = h;

                // ROTATE LINKED LIST k TIMES
                for( int i=0; i<k; i++ ) 
                {
                        ListNode current = head;
                        ListNode tail = null;
                        while( current.next != null )
                        {
                                if( current.next.next == null )
                                {
                                        tail = current.next;
                                        tail.next = head;
                                        head = tail;
                                        current.next = null;
                                        break;
                                }
                                current = current.next;     
                        }
                }
                return head;
        }
}