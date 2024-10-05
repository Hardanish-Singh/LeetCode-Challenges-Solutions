-- Leetcode: https://leetcode.com/problems/department-highest-salary/

-- Solution 1
SELECT 
    Department.name AS Department, 
    Employee.name AS Employee, 
    Employee.salary AS Salary 
FROM 
(
    SELECT 
            MAX(Employee.salary)  AS maxsalary, 
            Employee.departmentId AS departmentId
    FROM 
            Employee
    JOIN Department ON Department.id  = Employee.departmentId
    GROUP BY Employee.departmentId
)AS SubQuery   

JOIN Employee  ON Employee.departmentId = SubQuery.departmentId AND Employee.salary = SubQuery.maxsalary
JOIN Department ON Department.id = SubQuery.departmentId

-- Solution 2
SELECT
    Department.name AS Department, 
    Employee.name AS Employee, 
    Employee.Salary
FROM 
    Employee
JOIN Department ON Department.id = Employee.departmentId
WHERE (Employee.departmentId, Employee.Salary) IN (
                                                        SELECT 
                                                                departmentId, 
                                                                MAX(Salary) 
                                                        FROM 
                                                                Employee 
                                                        GROUP BY 
                                                                departmentId
                                                );

