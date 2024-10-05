-- Leetcode: https://leetcode.com/problems/duplicate-emails/

WITH ranked_emails AS (
    SELECT 
        id,
        email,
        ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) AS rn
    FROM Person
)
SELECT DISTINCT email FROM ranked_emails
WHERE rn > 1