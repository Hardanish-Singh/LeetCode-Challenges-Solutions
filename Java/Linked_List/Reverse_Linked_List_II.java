// https://leetcode.com/problems/reverse-linked-list-ii/
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
        public ListNode reverseBetween( ListNode head, int left, int right )
        {
                ListNode current = head;
                ListNode firstBefore = null;
                ListNode lastBefore = null;
                ListNode firstAfter = null;
                ListNode lastAfter = null;
                ListNode first = null;
                ListNode last = null;
                ListNode node = null;
                int index = 1;

                while( current != null )
                {
                        if( index < left )
                        {
                                node = new ListNode( current.val );
                                if( firstBefore == null )
                                {
                                    firstBefore = lastBefore = node;
                                }
                                else
                                {
                                    lastBefore.next = node;
                                    lastBefore = node;
                                }
                        }
                        else if( !( index >= left && index <= right ) )
                        {
                                node = new ListNode( current.val );
                                if( firstAfter == null )
                                {
                                    firstAfter = lastAfter = node;
                                }
                                else
                                {
                                    lastAfter.next = node;
                                    lastAfter = node;
                                }
                        }
                        else
                        {
                                node = new ListNode( current.val );
                                if( first == null )
                                {
                                    first = last = node;
                                }
                                else
                                {
                                    last.next = node;
                                    last = node;
                                }
                        }
                        current = current.next;
                        index++;
                }

                ListNode previous = first;
                current = first.next;
                ListNode tail = null;

                while( current != null )
                {
                        ListNode next = current.next;
                        current.next = previous;
                        previous = current;
                        current = next;
                }

                tail = first;
                tail.next = null;
                first = previous;

                ListNode resultHead = null;
                ListNode resultTail = null;

                while( firstBefore != null )
                {
                        node = new ListNode( firstBefore.val );
                        if( resultHead == null )
			{
			    resultHead = resultTail = node;
			}
			else
			{
			    resultTail.next = node;
			    resultTail = node;
			}
                        firstBefore = firstBefore.next;
                }

                while( first != null )
                {
                        node = new ListNode( first.val );
                        if( resultHead == null )
			{
			    resultHead = resultTail = node;
			}
			else
			{
			    resultTail.next = node;
			    resultTail = node;
			}
                        first = first.next;
                }

                while( firstAfter != null )
                {
                        node = new ListNode( firstAfter.val );
                        if( resultHead == null )
			{
			    resultHead = resultTail = node;
			}
			else
			{
			    resultTail.next = node;
			    resultTail = node;
			}
                        firstAfter = firstAfter.next;
                }



                return resultHead;

        }
}
