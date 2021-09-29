package com.srmtech.automobilepoolingapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.srmtech.automobilepoolingapp.model.Department;


@Repository
public interface DepartmentRepo extends JpaRepository<Department, Long> {

}
