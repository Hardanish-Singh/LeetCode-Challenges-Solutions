/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
*/
public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        
        ListNode l3 = null;
        ListNode l4 = null;
        l3 = l1;
        l4 = l2;
        short count1 = 0;
        short count2 = 0;
        
        while(l1 != null) {
            count1++;
            l1 = l1.next;
        }
        
        while(l2 != null) {
            count2++;
            l2 = l2.next;
        }
        
        ListNode l5 = null;
        
        if(count1 >= count2) {
            int remaining = 0;
            int remainder = 0;
            int vals1 = 0;
            while(l3 != null) {
                try{
                    vals1 = l4.val;
                }
                catch(Exception e) {
                    vals1 = 0;
                }
                if(l3.val + vals1 + remaining > 9) {
                   remainder = (l3.val + vals1 + remaining)%10;
                   l5 = new ListNode(remainder, l5);
                   remaining = (l3.val + vals1 + remaining)/10;
                }
                else {
                    l5 = new ListNode(l3.val + vals1 + remaining, l5);
                    remaining = 0;
                }
                l3 = l3.next;
                try {
                    l4 = l4.next;
                }
                catch(Exception e) {
                    
                }
            }
            if(remaining > 0) {
                l5 = new ListNode(remaining, l5);
                remaining = 0;
            }
        } 
        else {
            int remaining = 0;
            int remainder = 0;
            int vals1 = 0;
            while(l4 != null) {
                try{
                    vals1 = l3.val;
                }
                catch(Exception e) {
                    vals1 = 0;
                }
                if(l4.val + vals1 + remaining > 9) {
                   remainder = (l4.val + vals1 + remaining)%10;
                   l5 = new ListNode(remainder, l5);
                   remaining = (l4.val + vals1 + remaining)/10;
                }
                else {
                    l5 = new ListNode(l4.val + vals1 + remaining, l5);
                    remaining = 0;
                }
                l4 = l4.next;
                try {
                    l3 = l3.next;
                }
                catch(Exception e) {
                    
                }
            }
            if(remaining > 0) {
                l5 = new ListNode(remaining, l5);
                remaining = 0;
            }
        }
        
        ListNode ans = null;
        
        while(l5 != null) {
            ans = new ListNode(l5.val, ans);
            l5 = l5.next;
        }
        
        return ans;
    }
}

