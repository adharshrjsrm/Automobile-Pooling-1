package com.srmtech.automobilepooling.repo;

import com.srmtech.automobilepooling.model.Ride;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RideRepository extends JpaRepository<Ride, Long>{
    
}
