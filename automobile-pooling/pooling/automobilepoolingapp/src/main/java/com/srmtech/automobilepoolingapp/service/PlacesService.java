// package com.srmtech.automobilepoolingapp.service;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.srmtech.automobilepoolingapp.exception.ResourceNotFoundException;
// import com.srmtech.automobilepoolingapp.model.Places;
// import com.srmtech.automobilepoolingapp.repo.PlacesRepo;

// @Service
// public class PlacesService {
//     @Autowired
// 	private PlacesRepo placesrepo;
	

// 	public Places savePlaces(Places places) {
// 		return placesrepo.save(places);
// 	}

	
// 	public List<Places> getPlaces() throws ResourceNotFoundException {
// 		return placesrepo.findAll();
// 	}
// 	public Places getPlacesById(Long id) {

// 		return placesrepo.findById(id).orElse(null);

// 	}
// }
