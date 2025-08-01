# Leetcode: https://leetcode.com/problems/restore-ip-addresses/
        
class Solution:
        def restoreIpAddresses(self,s:str)->list[str]:
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
                                        if self.isIpAddressValid( [s1, s2, s3, s4] ):
                                                ip_address = s1 + "." + s2 + "." + s3 + "." + s4
                                                ip_addresses.append( ip_address )
                return ip_addresses

        def isIpAddressValid(self, ip_list: list[str]) -> bool:
                for ip in ip_list:
                        if ip[0] == "0" and len( ip ) > 1:
                                return False
                        if int( ip ) > 255:
                                return False
                return True