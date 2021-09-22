package com.example.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Ride;
import com.example.demo.model.User;
import com.example.demo.service.RideService;

@RestController
@RequestMapping(value="/ride")
public class RideController {

	@Autowired
	private RideService rideservice;
	
	@PostMapping(value = "/addride")
	public ResponseEntity<String> addDetails(@RequestBody Ride ride) {
		rideservice.saveRide(ride);
		String successMessage = "Ride added successfully.";
		ResponseEntity<String> response = new ResponseEntity<String>(successMessage, HttpStatus.CREATED);
		return response;
	}

	@GetMapping(value = "/getride")
	public ResponseEntity<List<Ride>> findAllUsers() throws Exception {
		List<Ride> RideList = rideservice.getRide();
		ResponseEntity<List<Ride>> response = new ResponseEntity<List<Ride>>(RideList, HttpStatus.OK);
		return response;
	}
	
	@GetMapping(value = "/{RideId}")
	public ResponseEntity<Ride> findUserById(@PathVariable Long rideId) throws Exception {
		Ride rideList = rideservice.getRideById(rideId);
		ResponseEntity<Ride> response = new ResponseEntity<Ride>(rideList, HttpStatus.OK);
		return response;
	}

}
