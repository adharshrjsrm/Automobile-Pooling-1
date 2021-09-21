package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Department;
import com.example.demo.repo.DepartmentRepo;

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

	public List<Department> getDept() throws Exception {
		return repository.findAll();
	}

	public Department getById(long id) {

		return repository.findById(id).orElse(null);

	}
	
	public Department updateDept(Department dept) {
		Department existingDept = repository.findById(dept.getId()).orElse(null);
		existingDept.setDepartmentname(dept.getDepartmentname());
		
		return repository.save(existingDept);
	

	}
	
	
}



