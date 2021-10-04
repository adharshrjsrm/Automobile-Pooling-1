package com.srmtech.automobilepoolingapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.srmtech.automobilepoolingapp.model.RideDetails;

public interface RideDetailsRepo extends JpaRepository<RideDetails,Long> {

}
