-- Leetcode: https://leetcode.com/problems/delete-duplicate-emails/

WITH ranked_emails AS (
    SELECT 
        id,
        email,
        ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) as rn
    FROM Person
)
DELETE FROM Person
WHERE id IN (
    SELECT id FROM ranked_emails WHERE rn > 1
);