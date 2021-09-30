package com.srmtech.automobilepoolingapp.service;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srmtech.automobilepoolingapp.exception.ResourceNotFoundException;
import com.srmtech.automobilepoolingapp.model.Vehicle;
import com.srmtech.automobilepoolingapp.repo.VehicleRepo;

@Service
public class VehicleService {
	
	@Autowired
	private VehicleRepo vehiclerepo;
	
	public Vehicle getUserById(int id) {

		return vehiclerepo.findById(id).orElse(null);

	}

	public Vehicle getVehicleById(int id) {

		return vehiclerepo.findById(id).orElse(null);

	}

	public void updateVehicle(@Valid Vehicle vehicle) {
		vehiclerepo.save(vehicle);
		
	}
	public Vehicle getdetails(Vehicle vehicle) {
		
		return vehiclerepo.save(vehicle);
	}
	public List<Vehicle> getVehicle() throws ResourceNotFoundException {
	return vehiclerepo.findAll();
}

}
