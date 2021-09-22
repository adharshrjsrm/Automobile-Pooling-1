package com.example.demo.controller;


import java.util.List;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.model.Vehicle;
import com.example.demo.service.VehicleService;


@RestController
@RequestMapping(value="/vehicle")
public class VehicleController {
	
	@Autowired
	private VehicleService vehicleservice;
	
	@GetMapping(value = "/vehicle/{vehicleId}")
	public ResponseEntity<Vehicle> findUserById(@PathVariable int vehicleId) throws Exception {
		Vehicle vehicleList = vehicleservice.getVehicleById(vehicleId);
		ResponseEntity<Vehicle> response = new ResponseEntity<Vehicle>(vehicleList, HttpStatus.OK);
		return response;
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> updateUser(@Valid @RequestBody Vehicle vehicle) {
		vehicleservice.updateVehicle(vehicle);
		String successMessage = "Vehicle  updated successfully.";
		ResponseEntity<String> response = new ResponseEntity<String>(successMessage, HttpStatus.OK);
		return response;
	}
	@PostMapping(value="/post")
    public ResponseEntity<Vehicle> saveVehicle(@RequestBody Vehicle vehicle)
    {    
       
		return new ResponseEntity<Vehicle>(vehicleservice.getdetails(vehicle),HttpStatus.OK);
    }
	
	@GetMapping(value = "/get")
	public ResponseEntity<List<Vehicle>> findAllVehicle() throws Exception {
		List<Vehicle> VehicleList = vehicleservice.getVehicle();
		ResponseEntity<List<Vehicle>> response = new ResponseEntity<List<Vehicle>>(VehicleList, HttpStatus.OK);
		return response;
	}
	

}
