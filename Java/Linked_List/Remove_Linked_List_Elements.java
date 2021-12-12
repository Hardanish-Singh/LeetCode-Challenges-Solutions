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
                                // HEAD HAS A CURRENT VAL 
                                if( previous == null )
                                {
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
                                else if( current.next.val == val )
                                {
                                        while( current.next.val == val )
                                        {
                                                current = current.next;
                                                if( current.next == null )
                                                {
                                                        previous.next = current.next;
                                                        return head;
                                                }
                                        }
                                        previous.next = current.next;
                                }
                                else 
                                {
                                        previous.next = current.next;
                                }
                        }
                        previous = current;
                        current = current.next;
                }
                if( current.val == val)
                {
                        if( previous == null )
                        {
                                return null;
                        }
                        previous.next = current.next;
                }
                return head;
        }
}