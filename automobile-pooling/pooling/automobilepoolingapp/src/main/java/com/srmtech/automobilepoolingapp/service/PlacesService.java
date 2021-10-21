 package com.srmtech.automobilepoolingapp.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.srmtech.automobilepoolingapp.exception.ResourceNotFoundException;
import com.srmtech.automobilepoolingapp.model.Places;
import com.srmtech.automobilepoolingapp.model.User;
import com.srmtech.automobilepoolingapp.repo.PlacesRepo;
import com.srmtech.automobilepoolingapp.repo.UserRepo;

@Service
public class PlacesService {
@Autowired
private PlacesRepo repository;
	
	public void getPlaces(Places place) {

		repository.save(place);
	}

	public Places savePlaces(Places place) {
		return repository.save(place);
	}

	public List<Places> savePlaces(List<Places> place) {
		return repository.saveAll(place);
	}

	public List<Places> getPlaces() throws ResourceNotFoundException {
		return repository.findAll();
	}

	public Places getPlacesById(Long id) {

		return repository.findById(id).orElse(null);

	}
}