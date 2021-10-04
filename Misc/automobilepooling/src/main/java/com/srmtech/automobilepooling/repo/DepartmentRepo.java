package com.srmtech.automobilepooling.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.srmtech.automobilepooling.model.Department;




@Repository
public interface DepartmentRepo extends JpaRepository<Department, Long> {

}
