-- Leetcode: https://leetcode.com/problems/not-boring-movies/

-- Solution 1
SELECT
    *
FROM
    cinema
WHERE id % 2 != 0 AND description != 'boring'
ORDER BY rating DESC;

-- Solution 2
SELECT
    *
FROM
    cinema
WHERE MOD(id, 2) = 1 AND description != 'boring'
ORDER BY rating DESC;