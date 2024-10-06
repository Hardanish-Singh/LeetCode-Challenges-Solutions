-- Leetcode: https://leetcode.com/problems/exchange-seats/

SELECT 
    id,
    CASE
        WHEN MOD(id, 2) = 0 THEN LAG(student) OVER(ORDER BY id)
        ELSE COALESCE(LEAD(student) OVER(ORDER BY id), student)
    END AS student
FROM Seat