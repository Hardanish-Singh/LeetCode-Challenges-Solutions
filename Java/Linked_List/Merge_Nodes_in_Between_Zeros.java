/*
        You are given the head of a linked list, which contains a series of integers separated by 0's. 
        The beginning and end of the linked list will have Node.val == 0.
        
        For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. 
        The modified list should not contain any 0's.
        
        Return the head of the modified linked list.

        Example 1:
                Input:
                        0 ---> 3 ---> 1 ---> 0 ---> 4 ---> 5 ---> 2 ---> 0
                Output:
                        4 ---> 11
        
        Example 2:
                Input:
                        0 ---> 1 ---> 0 ---> 3 ---> 0 ---> 2 ---> 2 ---> 0
                Output:
                        1 ---> 3 ---> 4
        
        Constraints:
                1) The number of nodes in the list is in the range [3, 2 * 10^5].
                2) 0 <= Node.val <= 1000
                3) There are no two consecutive nodes with Node.val == 0.
                4) The beginning and end of the linked list have Node.val == 0.

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
        public ListNode mergeNodes(ListNode head) 
        {
                ListNode prev = null;
                ListNode node = null;
                ListNode current = head;
                int result = 0;

                while( head != null ) 
                {
                        if( head.val == 0 )
                        {
                                if( prev != null )
                                {
                                        node = new ListNode( result );
                                        prev.next = node;
                                        node.next = head;
                                }
                                prev = head;
                                result = 0;
                        }
                        result += head.val;
                        head = head.next;
                }

                ListNode newHead = current;
                while( current != null ) 
                {
                        if( current.val == 0 && current.next != null )
                        {
                                current.val = current.next.val;
                                current.next = current.next.next;
                        }
                        if( current.next.next == null && current.next.val == 0 )
                        {
                                current.next = null;
                                break;
                        }
                        current = current.next;
                }

                return newHead;
        }
}