package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Ride;

public interface RideRepo extends JpaRepository<Ride,Long> {

}
