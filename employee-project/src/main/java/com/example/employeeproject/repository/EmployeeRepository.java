package com.example.employeeproject.repository;

import com.example.employeeproject.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
    long countByfirstName(String firstName);
    List findByfirstName(String firstName);

    @Query("SELECT e FROM Employee e WHERE e.firstName = :firstName AND e.emailId = :emailId")
    List<Employee> findByfirstNameAndemailId(String firstName, String emailId);

}
