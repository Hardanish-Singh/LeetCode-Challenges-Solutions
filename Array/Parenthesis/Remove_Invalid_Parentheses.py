#  Leetcode: https://leetcode.com/problems/remove-invalid-parentheses/

# Solution 1: DFS
class Solution:
    def isValid(s: str) -> bool:
        stack = []
        for c in s:
            if c == "(":
                stack.append("(")
            elif c == ")":
                if len(stack) > 0:
                    stack.pop()
                else:
                    return False
        return len(stack) == 0

    def removeInvalidParentheses(self, s: str) -> List[str]:
        result = []
        visit = set()
        queue = [s]
        found = False

        while queue:
            node = queue.pop(0)
            if Solution.isValid(node):
                result.append(node)
                found = True
            if not found:
                for i in range(len(node)):
                    if node[i] in "()":
                        new_node = node[:i] + node[i+1:]
                        if new_node not in visit:
                            queue.append(new_node)
                            visit.add(new_node)

        return result

# Solution 2: Recursion
class Solution:
    def removeInvalidParentheses(self, s: str) -> List[str]:
        ans = set()
        def get_invalid_paranthesis_count(s):
            st = []
            for c in s:
                if c=='(':
                    st.append(c)
                elif c==')':
                    if st and st[-1]=='(':
                        st.pop()
                    else:
                        st.append(c)
            return len(st)
        
        inv_count = get_invalid_paranthesis_count(s)
        
        @cache
        def recursion(st, count):
            if count == 0:
                if get_invalid_paranthesis_count(st) == 0:
                    ans.add(st)
            else:
                for i in range(len(st)):
                    new_st = st[0:i] + st[i+1:]
                    recursion(new_st, count - 1)

        recursion(s, inv_count)
        return ans