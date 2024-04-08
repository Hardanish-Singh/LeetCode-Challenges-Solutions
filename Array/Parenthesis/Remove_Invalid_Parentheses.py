#  Leetcode: https://leetcode.com/problems/remove-invalid-parentheses/

# Solution 1: BFS
class Solution:
    def is_valid(s: str) -> bool:
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
            if Solution.is_valid(node):
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
    def get_invalid_paranthesis_count(s: str) -> int:
        stack = []
        for c in s:
            if c=='(':
                stack.append(c)
            elif c==')':
                if stack and stack[-1]=='(':
                    stack.pop()
                else:
                    stack.append(c)
        return len(stack)

    def removeInvalidParentheses(self, s: str) -> List[str]:
        visit = set()    
        count = Solution.get_invalid_paranthesis_count(s)
        
        @cache
        def recursion(st: str, count: int) -> None:
            if count == 0 and Solution.get_invalid_paranthesis_count(st) == 0:
                visit.add(st)
            else:
                for i in range(len(st)):
                    new_st = st[0:i] + st[i+1:]
                    recursion(new_st, count - 1)

        recursion(s, count)
        return visit