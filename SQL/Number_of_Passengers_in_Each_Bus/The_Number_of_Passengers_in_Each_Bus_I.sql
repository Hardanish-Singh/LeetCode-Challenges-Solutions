-- LEETCODE: https://leetcode.com/problems/the-number-of-passengers-in-each-bus-i/

WITH minPassengersTime AS
(
    SELECT
        passengers.passenger_id,
        MIN(buses.arrival_time) AS arrival_time
    FROM passengers
    JOIN buses ON passengers.arrival_time <= buses.arrival_time
    GROUP BY passengers.passenger_id
)

SELECT
    bus_id,
    COUNT(minPassengersTime.arrival_time) AS passengers_cnt
FROM buses
LEFT JOIN minPassengersTime ON buses.arrival_time = minPassengersTime.arrival_time
GROUP BY bus_id
ORDER BY bus_id;