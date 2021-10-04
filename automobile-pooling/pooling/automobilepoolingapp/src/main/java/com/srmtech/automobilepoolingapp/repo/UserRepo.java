package com.srmtech.automobilepoolingapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.srmtech.automobilepoolingapp.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

}
