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