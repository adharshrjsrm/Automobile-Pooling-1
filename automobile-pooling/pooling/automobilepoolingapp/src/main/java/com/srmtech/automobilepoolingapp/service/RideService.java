package com.srmtech.automobilepoolingapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srmtech.automobilepoolingapp.exception.ResourceNotFoundException;
import com.srmtech.automobilepoolingapp.model.Ride;
import com.srmtech.automobilepoolingapp.repo.RideRepo;

@Service
public class RideService {
	
	@Autowired
	private RideRepo riderepo;
	

	public Ride saveRide(Ride ride) {
		return riderepo.save(ride);
	}

	
	public List<Ride> getRide() throws ResourceNotFoundException {
		return riderepo.findAll();
	}
	public Ride getRideById(Long id) {

		return riderepo.findById(id).orElse(null);

	}
}