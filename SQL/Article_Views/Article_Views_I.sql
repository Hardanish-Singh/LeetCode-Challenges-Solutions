-- Leetcode: https://leetcode.com/problems/article-views-i/

SELECT
        author_id AS id
FROM
        Views
WHERE author_id = viewer_id
GROUP BY id
ORDER BY id;