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
public class Solution 
{
        public ListNode getIntersectionNode( ListNode headA, ListNode headB ) 
        {
                ListNode h1 = headA;
                int count1 = 0;
                while( headA != null )
                {
                        count1++;
                        headA = headA.next;
                }
                headA = h1;
                
                ListNode h2 = headB;
                int count2 = 0;
                while( headB != null )
                {
                        count2++;
                        headB = headB.next;
                }
                headB = h2;
                
                int difference = 0;
                boolean listOne = false;
                boolean listTwo = false;
                if( count1 > count2 )
                {
                        difference = count1 - count2;
                        listOne = true;
                }
                else if( count2 > count1 )
                {
                        difference = count2 - count1;
                        listTwo = true;
                }
                
                while( listOne ? headA != null : headB != null )
                {
                        if( difference != 0 )
                        {
                                difference--;
                                if( listOne )
                                {
                                        headA = headA.next;
                                }
                                else if( listTwo )
                                {
                                        headB = headB.next;
                                }
                        }
                        else 
                        {
                                if( headA == headB )
                                {
                                        return headA;
                                }
                                headA = headA.next;
                                headB = headB.next;
                        }
                }
                return null;
        }
}