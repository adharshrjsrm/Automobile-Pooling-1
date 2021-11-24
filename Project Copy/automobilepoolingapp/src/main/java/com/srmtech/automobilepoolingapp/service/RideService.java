package com.srmtech.automobilepoolingapp.service;

import java.util.Date;
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


    public List<Ride> getRideDetails(Long userId) {
		Date date=new Date();
        return riderepo.getRideDetails(userId,date);
    }

	public List<Ride> getPassengerRideDetails(Long userId) {
		Date date=new Date();
        return riderepo.getPassengerRideDetails(userId,date);
    }

	public List<Ride> getAllRide(Long userId) {
        return riderepo.getAllRide(userId);
    }
	public List<Ride> getUserRide(Long userId) {
        return riderepo.getuserride(userId);
    }



    public Long getRideCount(Long user) {
		Date date=new Date();
        return riderepo.getRideCount(user,date);
    }

	public Boolean requestStatus(Long user) {
		Date date=new Date();
        return riderepo.requestStatus(user,date);
    }
}
