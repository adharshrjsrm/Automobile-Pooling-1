package com.srmtech.automobilepoolingapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.srmtech.automobilepoolingapp.model.Vehicle;

@Repository
public interface VehicleRepo extends JpaRepository<Vehicle,Integer> {

    

}
