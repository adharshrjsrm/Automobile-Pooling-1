package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.RideDetails;

public interface RideDetailsRepo extends JpaRepository<RideDetails,Long> {

}
