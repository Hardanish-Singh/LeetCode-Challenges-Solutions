/*
        You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.
        The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.
        For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.

        Example 1:
                        1 ---> 3 ---> 4 ---> 7 ---> 1 ---> 2 ---> 6
                                        ↓
                        1 ---> 3 ---> 4 ---> 1 ---> 2 ---> 6
        
        Input: head = [1, 3, 4, 7, 1, 2, 6]
        Output: [1, 3, 4, 1, 2, 6]
        Explanation:
                The above figure represents the given linked list. The indices of the nodes are written below.
                Since n = 7, node 3 with value 7 is the middle node.
                We return the new list after removing this node.

        Example 2:
                        1 ---> 2 ---> 3 ---> 4
                                ↓
                        1 ---> 2 ---> 4
        Input: head = [1, 2, 3, 4]
        Output: [1, 2, 4]
        Explanation:
                The above figure represents the given linked list.
                For n = 4, node 2 with value 3 is the middle node.

        Example 3: 
                        2 ---> 1
                            ↓
                            2
        Input: head = [2, 1]
        Output: [2]
        Explanation:
                The above figure represents the given linked list.
                For n = 2, node 1 with value 1 is the middle node, which is marked in red.
                Node 0 with value 2 is the only node remaining after removing node 1.

        Constraints:
                1) The number of nodes in the list is in the range [1, 10^5].
                2) 1 <= Node.val <= 10^5
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
        public ListNode deleteMiddle( ListNode head ) 
        {
                if( head.next == null )
                {
                        return null;
                }
                ListNode current = head;
                ListNode previous = null;
                int count = 1;
                while( current.next != null )
                {
                        count++;
                        current = current.next;
                }
                int middle = ( int ) Math.ceil( count / 2 );
                current = head;
                count = 0;
                while( true )
                {
                        if( middle == count )
                        {
                                previous.next = current.next;
                                break;
                        }
                        if( current.next == null )
                        {
                                break;  
                        }
                        previous = current;
                        current = current.next;
                        count++;
                }
                return head;
        }
}