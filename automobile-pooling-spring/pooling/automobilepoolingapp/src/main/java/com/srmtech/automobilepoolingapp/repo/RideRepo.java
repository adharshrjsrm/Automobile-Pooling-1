package com.srmtech.automobilepoolingapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.srmtech.automobilepoolingapp.model.Ride;



public interface RideRepo extends JpaRepository<Ride,Long> {

}
