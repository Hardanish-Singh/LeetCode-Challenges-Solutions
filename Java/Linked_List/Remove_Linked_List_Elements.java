/*
        Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
        
        Example 1: 
                        1 ---> 2 ---> 6 ---> 3 ---> 4 ---> 5 ---> 6
                                        ↓
                        1 ---> 2 ---> 3 ---> 4 ---> 5
        
                Input: head = [1, 2, 6, 3, 4, 5, 6], val = 6
                Output: [1, 2, 3, 4, 5]
                
        Example 2:
                
                Input: head = [1], val = 1
                Output: []
        
        Example 3:
                      
                Input: head = [7, 7, 7, 7], val = 7
                Output: []
        
        Constraints:
                1) The number of nodes in the list is in the range [0, 10^4].
                2) 1 <= Node.val <= 50
                3) 0 <= val <= 50
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
        public ListNode removeElements( ListNode head, int val ) 
        {       
                if( head == null )
                {
                        return head;
                }
                
                ListNode current = head;
                ListNode previous = null;
                
                while( current.next != null )
                {
                        if( current.val == val )
                        {
                                // IF HEAD NODE ITSELF HOLDS THE KEY
                                // OR MULTIPLE OCCURRENCES OF KEY
                                if( previous == null )
                                {
                                        // CHECKS IF THE CURRENT NODE/POINTER KEY EXISTS MULTIPLE TIMES
                                        while( current.val == val )
                                        {
                                                if( current.next == null )
                                                {
                                                        break;
                                                }
                                                current = current.next;
                                        }
                                        head = current;
                                        if( head.val == val && head.next == null )
                                        {
                                                return null;
                                        }
                                        if( head.next == null )
                                        {
                                                return head;
                                        }
                                }
                                // CHECKS IF THE CURRENT NODE/POINTER KEY MATCHES THE NEXT NODE/POINTER KEY
                                // OR MULTIPLE OCCURRENCES OF KEY
                                else if( current.next.val == val )
                                {
                                        // CHECKS IF THE CURRENT NODE/POINTER KEY EXISTS MULTIPLE TIMES
                                        while( current.next.val == val )
                                        {
                                                current = current.next;
                                                if( current.next == null )
                                                {
                                                        // UNLINK/DELETE THE CURRENT NODE/POINTER FROM THE LINKED LIST
                                                        previous.next = current.next;
                                                        return head;
                                                }
                                        }
                                        // UNLINK/DELETE THE CURRENT NODE/POINTER FROM THE LINKED LIST
                                        previous.next = current.next;
                                }
                                else
                                {
                                        // UNLINK/DELETE THE CURRENT NODE/POINTER FROM THE LINKED LIST
                                        previous.next = current.next;
                                }
                        }
                        previous = current;
                        current = current.next;
                }
                if( current.val == val)
                {
                        //HEAD NODE HAS ONLY ONE NODE
                        if( previous == null )
                        {
                                return null;
                        }
                        // UNLINK/DELETE THE CURRENT NODE/POINTER FROM THE LINKED LIST
                        previous.next = current.next;
                }
                return head;
        }
}