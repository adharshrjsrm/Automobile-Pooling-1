package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Ride;
import com.example.demo.model.User;
import com.example.demo.repo.RideRepo;

@Service
public class RideService {
	
	@Autowired
	private RideRepo riderepo;
	

	public Ride saveRide(Ride ride) {
		return riderepo.save(ride);
	}

	
	public List<Ride> getRide() throws Exception {
		return riderepo.findAll();
	}
	public Ride getRideById(Long id) {

		return riderepo.findById(id).orElse(null);

	}
}
