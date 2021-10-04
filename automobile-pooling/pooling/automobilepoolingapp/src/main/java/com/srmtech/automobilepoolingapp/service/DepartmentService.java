package com.srmtech.automobilepoolingapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srmtech.automobilepoolingapp.exception.ResourceNotFoundException;
import com.srmtech.automobilepoolingapp.model.*;
import com.srmtech.automobilepoolingapp.repo.*;

@Service
public class DepartmentService {
	
	@Autowired
	private DepartmentRepo repository;
	
	public void getDept(Department dept) {

		repository.save(dept);
	}

	public Department saveDept(Department dept) {
		return repository.save(dept);
	}

	public List<Department> saveDept(List<Department>dept) {
		return repository.saveAll(dept);
	}

	public List<Department> getDept() throws ResourceNotFoundException {
		return repository.findAll();
	}

	public Department getById(long id) {

		return repository.findById(id).orElse(null);

	}
	
	public Department updateDept(Department dept) throws ResourceNotFoundException {
		Department existingDept = repository.findById(dept.getId()).orElseThrow(() -> new ResourceNotFoundException("Department not found: "+dept.getId()));
		existingDept.setDepartmentname(dept.getDepartmentname());
		return repository.save(existingDept);

	}
	
	
}



