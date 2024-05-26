-- Leetcode: https://leetcode.com/problems/recyclable-and-low-fat-products/

-- Solution 1
SELECT
    product_id
FROM
    products
WHERE low_fats = TRUE AND recyclable = TRUE;

-- Solution 2
SELECT
    product_id
FROM
    products
WHERE low_fats = 'Y' AND recyclable = 'Y';