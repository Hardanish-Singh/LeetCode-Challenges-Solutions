// Leetcode: https://leetcode.com/problems/sort-characters-by-frequency/

class Solution 
{
        public String frequencySort(String s) 
        {
                HashMap<Character,Integer> map = new HashMap<Character,Integer>();
                for( int i = 0; i < s.length(); i++ )
                {
                        char key = s.charAt(i);
                        if(map.containsKey(key))
                        {
                                map.put(key, map.get(key) + 1);
                        }
                        else
                        {
                                map.put(key, 1);
                        }
                }

                PriorityQueue<Character> pq = new PriorityQueue<Character>((a,b) -> (map.get(b) - map.get(a)));
                for (Character c : map.keySet()) 
                {
                        pq.add(c);
                }

                StringBuilder sb = new StringBuilder();

                while(!pq.isEmpty())
                {
                        char ch = pq.poll();
                        int count = map.get(ch);
                        while(count-- > 0)
                        {
                                sb.append(ch);
                        }
                }
                return sb.toString();
        }
}