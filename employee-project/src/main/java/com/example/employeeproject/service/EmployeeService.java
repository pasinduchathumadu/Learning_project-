package com.example.employeeproject.service;

import com.example.employeeproject.model.Employee;
import com.example.employeeproject.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;
    public long getfirstcount(String firstName) {
        return employeeRepository.countByfirstName(firstName);
    }

    public int gettotalemployee(String firstName) {
        List<Employee> employees = employeeRepository.findByfirstName(firstName);

        return employees.stream().mapToInt(Employee::getSalary).sum();
    }


    public List<Employee> getdetails(String firstName, String emailId) {
       return employeeRepository.findByfirstNameAndemailId(firstName,emailId);

    }
}
