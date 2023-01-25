WITH minPassengersTime AS
(
    SELECT
        Passengers.passenger_id,
        MIN(Buses.arrival_time) AS arrival_time
    FROM Passengers
    JOIN Buses ON Passengers.arrival_time <= Buses.arrival_time
    GROUP BY Passengers.passenger_id
)

SELECT
    bus_id,
    COUNT(M.arrival_time) AS passengers_cnt
FROM Buses B
LEFT JOIN minPassengersTime M
    ON B.arrival_time = M.arrival_time
GROUP BY bus_id
ORDER BY bus_id;