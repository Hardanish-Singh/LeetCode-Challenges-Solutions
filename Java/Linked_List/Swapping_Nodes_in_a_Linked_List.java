/*
        You are given the head of a linked list, and an integer k.
        Return the head of the linked list after swapping the values of the k^th node from the beginning and the k^th node from the end.
        
        Example 1:
                1 ---> 2 ---> 3 ---> 4 ---> 5
                              ↓
                1 ---> 4 ---> 3 ---> 2 ---> 5

                Input: head = [1, 2, 3, 4, 5], k = 2
                Output: [1, 4, 3, 2, 5]
        
        Example 2:
                Input: head = [7, 9, 6, 6, 7, 8, 3, 0, 9, 5], k = 5
                Output: [7, 9, 6, 6, 8, 7,3, 0, 9, 5]
        
        Constraints:
                1) The number of nodes in the list is n.
                2) 1 <= k <= n <= 10^5
                3) 0 <= Node.val <= 100
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
        public ListNode swapNodes( ListNode head, int k ) 
        {
                ListNode first = null;
                ListNode last = null;
                ListNode current = head;
                int length = 0;
                int count = 0;
                
                while( current != null ) 
                {
                        length++;
                        if( length == k )
                        {
                                first = current;
                        }
                        current = current.next;        
                }
                
                current = head;
                while( current != null ) 
                {
                        if( count == ( length - k ) )
                        {
                                last = current;
                                break;
                        }
                        count++;
                        current = current.next;  
                }
                
                // SWAP VALUES OF TWO NODES
                int temp = first.val;
                first.val = last.val;
                last.val = temp;
                
                return head;
        }
}