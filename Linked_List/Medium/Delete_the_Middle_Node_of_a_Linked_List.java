// Leetcode: https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

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