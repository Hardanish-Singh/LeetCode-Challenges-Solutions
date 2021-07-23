public class Solution
{
    public boolean hasCycle(ListNode head)
    {
        while( head != null )
        {
                if( head.val == -100002 )
                {
                        return true;
                }
                else
                {
                        head.val = -100002;
                }
                head = head.next;
        }
        return false;
    }
}
