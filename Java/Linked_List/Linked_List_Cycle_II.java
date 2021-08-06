/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution  
{
    public ListNode detectCycle( ListNode head ) 
    {
        while( head != null )
        {
                if( head.val == -100002 )
                {
                        return head;
                }
                else
                {
                        head.val = -100002;
                }
                head = head.next;
        }
        return null;
    }
}