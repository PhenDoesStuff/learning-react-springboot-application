package com.montaguestephen.springboot.controller;

import com.montaguestephen.springboot.exception.ResourceNotFoundException;
import com.montaguestephen.springboot.model.Employee;
import com.montaguestephen.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController  {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // Build Create (POST) Employees REST API
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    // Build GET Employee by ID REST API
    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with id " + id + " does not exists"));
        return ResponseEntity.ok(employee);
    }

    // Build Update Employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employee) {
        Employee updateEmployee = employeeRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Employee with id " + id + " does not exists"));

        updateEmployee.setFirstName(employee.getFirstName());
        updateEmployee.setLastName(employee.getLastName());
        updateEmployee.setEmailAddress(employee.getEmailAddress());

        employeeRepository.save(updateEmployee);

        return ResponseEntity.ok(updateEmployee);
    }

    // Build DELETE Employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<Employee> deleteEmployee(@PathVariable long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee with id " + id + " does not exists"));

        employeeRepository.delete(employee);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
