package com.srmtech.automobilepoolingapp.service;

import java.util.List;
import com.srmtech.automobilepoolingapp.repo.PlacesRepo;
import com.srmtech.automobilepoolingapp.model.Places;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srmtech.automobilepoolingapp.exception.ResourceNotFoundException;

@Service
public class PlacesService {

    @Autowired
    private PlacesRepo placesRepo;

    public List<Places> savePlaces(List<Places> places) {
		return placesRepo.saveAll(places);
	}

	
	public List<Places> getPlaces() throws ResourceNotFoundException {
		return placesRepo.findAll();
	}
    
}
