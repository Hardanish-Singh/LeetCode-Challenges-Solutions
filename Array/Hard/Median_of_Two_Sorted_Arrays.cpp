#include <vector>
using namespace std;

// Solution 1
class Solution {
    public:
        double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
            int len1 = nums1.size(), len2 = nums2.size();
            // Create a new vector v of combined size len1 and len2
            vector<int> v(len1 + len2);
            // Copy all elements from nums1 into the merge vector starting at the beginning
            copy(nums1.begin(), nums1.end(), v.begin());
            // Copy all elements from nums2 into the merge vector starting at position v.begin() + len1
            copy(nums2.begin(), nums2.end(), v.begin() + len1);
            // Sort the merge vector in ascending order to find the median
            sort(v.begin(), v.end());
            int n = v.size();
            return n % 2 ? v[n/2] : ( v[n/2-1] + v[n/2] ) / 2.0;
        }
};

// Solution 2
class Solution {
    public:
        double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
            vector<int> v;

            for(auto i:nums1)
            {
                v.push_back(i);
            }
            for(auto i:nums2)
            {
                v.push_back(i);
            }

            sort(v.begin(), v.end());

            int n = v.size();
            return n % 2 ? v[n/2] : ( v[n/2-1] + v[n/2] ) / 2.0;
        }
};
