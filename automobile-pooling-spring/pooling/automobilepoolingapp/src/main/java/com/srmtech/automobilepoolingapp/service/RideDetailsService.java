package com.srmtech.automobilepoolingapp.service;

import java.util.List;

import com.srmtech.automobilepoolingapp.exception.ResourceNotFoundException;
import com.srmtech.automobilepoolingapp.model.RideDetails;
import com.srmtech.automobilepoolingapp.repo.RideDetailsRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RideDetailsService {
    
	@Autowired
	private RideDetailsRepo rideDetailsRepo;
	

	public RideDetails saveRideDetails(RideDetails ride) {
		return rideDetailsRepo.save(ride);
	}

	
	public List<RideDetails> getRideDetails() throws ResourceNotFoundException {
		return rideDetailsRepo.findAll();
	}
	public RideDetails getRideDetailsById(Long id) {

		return rideDetailsRepo.findById(id).orElse(null);

	}
}
