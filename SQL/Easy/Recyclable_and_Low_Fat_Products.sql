-- Leetcode: https://leetcode.com/problems/recyclable-and-low-fat-products/

SELECT
        product_id
FROM
        products
WHERE low_fats = TRUE AND recyclable = TRUE;