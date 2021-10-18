package com.srmtech.automobilepoolingapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srmtech.automobilepoolingapp.exception.ResourceNotFoundException;

@Service
public class PlacesService {

    @Autowired
    private PlacesRepo placesRepo;

    public Places savePlaces(Places places) {
		return placesRepo.save(places);
	}

	
	public List<Places> getPlaces() throws ResourceNotFoundException {
		return placesRepo.findAll();
	}
    
}
