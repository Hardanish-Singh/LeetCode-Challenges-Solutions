-- Leetcode: https://leetcode.com/problems/the-number-of-passengers-in-each-bus-ii/

WITH TEMP AS 
(
        SELECT 
                bus_id, 
                b.arrival_time, 
                capacity, 
                COUNT(passenger_id) AS num
        FROM Buses b  
        LEFT JOIN Passengers p  ON p.arrival_time <= b.arrival_time
        WHERE bus_id is not NULL
        GROUP BY bus_id
        ORDER BY arrival_time
)

SELECT bus_id, passengers_cnt from
(
        SELECT 
                bus_id, 
                capacity, 
                num,
                @passengers_cnt := LEAST(capacity, num - @accum) AS passengers_cnt, 
                @accum := @accum + @passengers_cnt
        FROM TEMP, 
        ( SELECT @accum := 0 ) AS accum,
        ( SELECT @passengers_cnt := 0 ) AS passengers_cnt
) temp
ORDER BY bus_id