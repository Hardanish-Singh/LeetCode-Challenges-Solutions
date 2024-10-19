-- Leetcode: https://leetcode.com/problems/rising-temperature/

SELECT w2.id 
FROM WEATHER AS w1
JOIN WEATHER AS w2 ON DATE_ADD(w1.RecordDate, INTERVAL 1 DAY) = DATE(w2.RecordDate) AND w2.Temperature > w1.Temperature
ORDER BY w1.RecordDate, w2.RecordDate