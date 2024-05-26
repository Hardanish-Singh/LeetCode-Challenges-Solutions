-- Leetcode: https://leetcode.com/problems/swap-salary/

-- Solution 1
UPDATE salary SET sex = CASE WHEN sex = 'm' THEN 'f' ELSE 'm' END;

-- Solution 2
UPDATE salary SET sex = CASE sex WHEN 'm' THEN 'f' ELSE 'm' END;