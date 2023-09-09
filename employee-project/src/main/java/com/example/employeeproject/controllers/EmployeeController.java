package com.example.employeeproject.controllers;

import com.example.employeeproject.exception.Requestnotfound;
import com.example.employeeproject.model.Employee;
import com.example.employeeproject.repository.EmployeeRepository;
import com.example.employeeproject.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/employees")
    public List<Employee>getallemployee(){
        return employeeRepository.findAll();
    }
    @PostMapping("/create")
    public  Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }
    @GetMapping("/getid/{id}")
    public Optional<Employee> getemployeeid(@PathVariable Long id){
        return employeeRepository.findById(id);

    }
    @PutMapping("update/{id}")
    public Employee updateEmployee(@PathVariable Long id,@RequestBody Employee employeedetails){
        Employee employee =   employeeRepository.findById(id).orElseThrow(()->new Requestnotfound("Employee not exist with id:"+id));
        employee.setEmailId(employeedetails.getEmailId());
        employee.setFirstName(employeedetails.getFirstName());
        employee.setLastName(employeedetails.getLastName());

        Employee updateEmployee = employeeRepository.save(employee);
        return updateEmployee;
    }

    @DeleteMapping("delete/{id}")

    public  Employee deleteEmployee(@PathVariable Long id){
        Employee employee = employeeRepository.findById(id).orElseThrow(()->new Requestnotfound("Employee not exist with id:"+id));
        employeeRepository.deleteById(id);
        return employee;
    }
    @GetMapping("count/{firstName}")

    public long getcount(@PathVariable String firstName){
        return employeeService.getfirstcount(firstName);
    }

    @GetMapping("sumsalary/{firstName}")

    public int gettotal(@PathVariable String firstName){
        return employeeService.gettotalemployee(firstName);
    }

    @GetMapping("getuser/{firstName}/{emailId}")
    public List<Employee> getdetails(@PathVariable String firstName,@PathVariable String emailId){
        return  employeeService.getdetails(firstName,emailId);
    }




}
