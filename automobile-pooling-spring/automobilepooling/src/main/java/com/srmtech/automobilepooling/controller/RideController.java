package com.srmtech.automobilepooling.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.validation.Valid;

import com.srmtech.automobilepooling.exception.ResourceNotFoundException;
import com.srmtech.automobilepooling.model.Ride;
import com.srmtech.automobilepooling.repo.RideRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

// @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class RideController {


    private Logger log = LoggerFactory.getLogger(RideController.class);

    @Autowired
    private RideRepository rideRepo;

    @GetMapping("/ride")
    public List<Ride> getAllRides() {
        log.info("Ride Data's fetched: ");
        return rideRepo.findAll();
    }

    @GetMapping("/ride/{id}")
    public ResponseEntity<Ride> getRideById(@Valid @PathVariable(value = "id") Long rideLong)
            throws ResourceNotFoundException {
                Ride ride1 = rideRepo.findById(rideLong)
                .orElseThrow(() -> new ResourceNotFoundException("Ride not found for this id :: " + rideLong));
        log.info("Ride Data's fetched: ");
        return ResponseEntity.ok().body(ride1);
    }

    @PostMapping("/ride")
    public Ride createRide(@Valid @RequestBody Ride ride2) throws ResourceNotFoundException {
        log.info("Ride Inserted!...");
        return rideRepo.save(ride2);
    }

    @PutMapping("/ride/{id}")
    public ResponseEntity<Ride> updateRide(@Valid @PathVariable(value = "id") Long rideLong,
            @Valid @RequestBody Ride ride3) throws ResourceNotFoundException {
                Ride ride4 = rideRepo.findById(rideLong)
                .orElseThrow(() -> new ResourceNotFoundException("Ride cannot be found for this id :: " + rideLong));

                ride4.setOwnerId(ride3.getOwnerId());
                ride4.setOwnerName(ride3.getOwnerName());
                ride4.setOwnerMobile(ride3.getOwnerMobile());
                ride4.setOwnerDepartment(ride3.getOwnerDepartment());
                ride4.setOwnerSourceLat(ride3.getOwnerSourceLat());
                ride4.setOwnerSourceLon(ride3.getOwnerSourceLon());
                ride4.setOwnerDestinationLat(ride3.getOwnerDestinationLat());
                ride4.setOwnerDestinationLon(ride3.getOwnerDestinationLon());
                ride4.setRideTime(ride3.getRideTime());
                ride4.setVehicleId(ride3.getVehicleId());
                ride4.setVehiclecolor(ride3.getVehiclecolor());
                ride4.setVehiclenumber(ride3.getVehiclenumber());
                ride4.setNumberofseats(ride3.getNumberofseats());
                ride4.setPassengerId(ride3.getPassengerId());
                ride4.setPassengerName(ride3.getPassengerName());
                ride4.setPassengerMobile(ride3.getPassengerMobile());
                ride4.setPassengerDepartment(ride3.getPassengerDepartment());
                ride4.setPassengerSourceLat(ride3.getPassengerSourceLat());
                ride4.setPassengerSourceLon(ride3.getPassengerSourceLon());
                ride4.setPassengerDestinationLat(ride3.getOwnerDestinationLat());
                ride4.setPassengerDestinationLon(ride3.getOwnerDestinationLon());


        final Ride updatedRide = rideRepo.save(ride4);
        log.info("Ride Updated!...");
        return ResponseEntity.ok(updatedRide);
    }

    @DeleteMapping("/ride/{id}")
    public Map<String, Boolean> deleteAdmin(@Valid @PathVariable(value = "id") Long rideLong)
            throws ResourceNotFoundException {
                Ride ride5 = rideRepo.findById(rideLong)
                .orElseThrow(() -> new ResourceNotFoundException("Ride not found for this id :: " + rideLong));

                rideRepo.delete(ride5);
        Map<String, Boolean> response = new HashMap<>();
        response.put("Ride Deleted", Boolean.TRUE);
        log.info("Ride Deleted!....");
        return response;
    }
}

