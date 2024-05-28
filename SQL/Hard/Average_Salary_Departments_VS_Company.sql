-- Leetcode: https://leetcode.com/problems/average-salary-departments-vs-company/

SELECT 
    DATE_FORMAT(pay_date,'%Y-%m') AS pay_month,
    department_id,
    CASE 
        WHEN pay_date_avg_by_dept > pay_date_avg
            THEN 
                'higher'
        WHEN 
            pay_date_avg_by_dept < pay_date_avg
            THEN
                'lower'
        ELSE
            'same'
    END AS comparison 
FROM 
(
    SELECT 
        pay_date,
        department_id,
        AVG(amount) OVER(PARTITION BY pay_date) AS pay_date_avg,
        AVG(amount) OVER(PARTITION BY pay_date, department_id) AS pay_date_avg_by_dept
    FROM 
        salary
    JOIN employee ON employee.employee_id = salary.employee_id
    ORDER BY pay_date DESC
) AS x
GROUP BY DATE_FORMAT(pay_date,'%Y-%m'),
department_id