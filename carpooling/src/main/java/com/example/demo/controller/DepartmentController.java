package com.example.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Department;
import com.example.demo.service.DepartmentService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "department")


public class DepartmentController {
	
	@Autowired
	private DepartmentService service;
	
	
	@GetMapping(value = "/getdept")
	public ResponseEntity<List<Department>> findAll() throws Exception {
		List<Department> deptList = service.getDept();
		ResponseEntity<List<Department>> response = new ResponseEntity<List<Department>>(deptList, HttpStatus.OK);
		return response;
	}

	@GetMapping(value = "/{deptId}")
	public ResponseEntity<Department> findDeptById(@PathVariable int deptId) throws Exception {
		Department deptList = service.getById(deptId);
		ResponseEntity<Department> response = new ResponseEntity<Department>(deptList, HttpStatus.OK);
		return response;
	}
	
	@PostMapping("/adddept")
	public ResponseEntity<String> updateDept(@Valid @RequestBody Department dept) {
		service.saveDept(dept);
		String successMessage = "dept  updated successfully.";
		ResponseEntity<String> response = new ResponseEntity<String>(successMessage, HttpStatus.OK);
		return response;
	}


}
