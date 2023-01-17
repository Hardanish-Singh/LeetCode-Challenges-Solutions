// Leetcode: https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/

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
    public ListNode deleteDuplicatesUnsorted(ListNode head) 
    {
        ListNode current = head;
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();

        while(current != null)
        {
            if(map.containsKey(current.val))
            {
                map.put(current.val, map.get(current.val) + 1);
            }
            else
            {
                map.put(current.val, 1);
            }
            current = current.next;
        }

        current = head;
        ListNode temp = new ListNode(-1);
        ListNode prev = temp;
        while(current != null)
        {
            if (map.get(current.val) == 1)
            {
                prev.next = new ListNode( current.val );
                prev = prev.next;
            }
            current = current.next;
        }
        return temp.next;
    }
}