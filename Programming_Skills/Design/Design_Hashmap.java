// Leetcode: https://leetcode.com/problems/design-hashmap/

import java.util.HashMap;

class MyHashMap 
{
        HashMap<Integer, Integer> map = null;
        
        public MyHashMap() 
        {
                map = new HashMap<Integer, Integer>();
        }

        public void put(int key, int value) 
        {
                map.put(key, value);      
        }

        public int get(int key) 
        {
                return map.get(key) != null ? map.get(key) : -1;
        }

        public void remove(int key) 
        {
                map.remove(key);
        }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap obj = new MyHashMap();
 * obj.put(key,value);
 * int param_2 = obj.get(key);
 * obj.remove(key);
 */