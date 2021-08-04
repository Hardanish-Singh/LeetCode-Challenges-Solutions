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
                if( head == null )
                {
                        return null;
                }
                
                ListNode h = head;
                int count = 1;
                while( head.next != null )
                {
                        count++;
                        head = head.next;
                }
                k = k%count;
                head = h;
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