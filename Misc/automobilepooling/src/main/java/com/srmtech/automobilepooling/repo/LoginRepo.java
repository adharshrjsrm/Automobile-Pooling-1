package com.srmtech.automobilepooling.repo;

import com.srmtech.automobilepooling.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepo extends JpaRepository<Login,Long> {
    Login findByEmail(String email);
}
