class Solution 
{
        public ListNode middleNode(ListNode head) 
        {
                double count = 0;
                ListNode current = head;
                        
                while( current != null )
                {
                        count++;
                        current = current.next;
                }
                if( count % 2 == 0 )
                {
                        count++;
                }
                count = Math.ceil( count / 2 );
                
                double c = 1;
                System.out.println(count);
                while( head != null )
                {
                        if( c == count ) 
                        {
                                break;
                        }
                        head = head.next;
                        c++;
                }
                
                return head;
        }
}