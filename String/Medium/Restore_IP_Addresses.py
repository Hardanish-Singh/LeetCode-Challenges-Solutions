# class Solution(object):
#     def restoreIpAddresses(self, s):
#         """
#         :type s: str
#         :rtype: List[str]
#         """
        
class Solution:
        def restoreIpAddresses( self, s ):
                if len( s ) > 12 or len( s ) < 4:
                        return []
                
                ip_addresses = []
                
                for i in [1, 2, 3]:
                        for j in [i+1, i+2, i+3]:
                                for k in [j+1, j+2, j+3]:
                                        if k >= len( s ):
                                                break
                                        s1 = s[:i]
                                        s2 = s[i:j]
                                        s3 = s[j:k]
                                        s4 = s[k:]
                                        if self.check_valid( [s1, s2, s3, s4] ):
                                                new_string = s1 + "." + s2 + "." + s3 + "." + s4
                                                ip_addresses.append( new_string )
                return ip_addresses
        
        def check_valid(self,str_list):
                for s in str_list:
                        if s[0] == "0" and len( s ) > 1:
                                return False
                        if int( s ) > 255:
                                return False
                return True