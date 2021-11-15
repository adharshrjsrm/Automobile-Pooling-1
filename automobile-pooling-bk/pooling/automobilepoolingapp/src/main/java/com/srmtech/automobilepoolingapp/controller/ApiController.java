package com.srmtech.automobilepoolingapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

import javax.validation.Valid;

import com.srmtech.automobilepoolingapp.exception.ResourceNotFoundException;
import com.srmtech.automobilepoolingapp.model.*;
import com.srmtech.automobilepoolingapp.payload.response.MsgResponse;
import com.srmtech.automobilepoolingapp.service.*;


@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class ApiController extends BaseController {
   
    // User
    @Autowired
    private UserService userservice;


   

    @PreAuthorize("isAuthenticated()")
    @PostMapping(value = "/user/add")
    public ResponseEntity<MsgResponse> addDetails(@Valid @RequestBody User user) {
        UserLogin userLogin=new UserLogin();
        userLogin.setId(getUserId());
        user.setUserLogin(userLogin);
        userservice.saveUser(user);
        return new ResponseEntity<>(new MsgResponse("User added successfully."), HttpStatus.CREATED);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/existuser")
    public  boolean existByUserLogin(){
        Long userid=getUserId();
        Boolean user = userservice.existByUserLogin(userid);
        return user;
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/user/get")
    public ResponseEntity<List<User>> findAllUsers() throws ResourceNotFoundException {
        List<User> userList = userservice.getUser();
        return new ResponseEntity<>(userList, HttpStatus.OK);

    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/user/getuser")
    public ResponseEntity<User> findUserById() throws ResourceNotFoundException {
        User userList = userservice.getUserById(getUserId());
        return new ResponseEntity<>(userList, HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/user/getvechilcebyuser")
    public ResponseEntity<User> findVehicleidByUserId() throws ResourceNotFoundException {
        User userList = userservice.getVehicleByUserId(getUserId());
        return new ResponseEntity<>(userList, HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/owner")
    public ResponseEntity<List<UserJoin>> getOwner() throws ResourceNotFoundException {
        List<UserJoin> userList = userservice.getOwner();
        return new ResponseEntity<>(userList, HttpStatus.OK);

    }

    @PreAuthorize("isAuthenticated()")
    @DeleteMapping(value = "/user/delete/{id}")
    public ResponseEntity<MsgResponse> deleteUser(@PathVariable Long id) throws ResourceNotFoundException {
        userservice.deleteUser(id);
        return new ResponseEntity<>(new MsgResponse("User deleted successfully."), HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @PutMapping("/user/update")
    public ResponseEntity<MsgResponse> updateUser(@Valid @RequestBody User user) throws ResourceNotFoundException {
        Long userid=getUserId();
        Long userId = userservice.getUserIdRide(userid);
        user.setId(userId);
        userservice.updateUser(user);
        return new ResponseEntity<>(new MsgResponse("User updated successfully."), HttpStatus.ACCEPTED);
    }

    @PreAuthorize("isAuthenticated()")
    @PutMapping("/user/updatestatus")
    public ResponseEntity<MsgResponse> updateUserStatus(@Valid @RequestBody User user) throws ResourceNotFoundException {
        Long userid=getUserId();
        Long userId = userservice.getUserIdRide(userid);
        userservice.updateUserStatus(user.getAvailabilitystatus(),userId);
        return new ResponseEntity<>(new MsgResponse("User Status updated successfully."), HttpStatus.ACCEPTED);
    }

    // Vehicle
    @Autowired
    private VehicleService vehicleservice;

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/vehicle/{Id}")
    public ResponseEntity<Vehicle> findUserById(@PathVariable int vehicleId) throws ResourceNotFoundException {
        Vehicle vehicleList = vehicleservice.getVehicleById(vehicleId);
        return new ResponseEntity<>(vehicleList, HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @PostMapping(value = "/vehicle/add")
    public ResponseEntity<MsgResponse> saveVehicle(@RequestBody Vehicle vehicle) {
        vehicleservice.getdetails(vehicle);
        Long vehicleId=vehicle.getId();
        userservice.updateVehicleId(getUserId(),vehicleId);
        return new ResponseEntity<>(new MsgResponse("Vehicle added successfully"), HttpStatus.CREATED);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/vehicle/get")
    public ResponseEntity<List<Vehicle>> findAllVehicle() throws ResourceNotFoundException {
        List<Vehicle> vehicleList = vehicleservice.getVehicle();
        return new ResponseEntity<>(vehicleList, HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @PutMapping("/vehicle/update")
    public ResponseEntity<MsgResponse> updateUser(@Valid @RequestBody Vehicle vehicle) {
        vehicleservice.updateVehicle(vehicle);
        return new ResponseEntity<>(new MsgResponse("Vehicle added successfully"), HttpStatus.ACCEPTED);
    }

    // Ride
    @Autowired
    private RideService rideservice;

    @PreAuthorize("isAuthenticated()")
    @PostMapping(value = "/ride/add")
    public ResponseEntity<MsgResponse> addRide(@RequestBody Ride ride) {
        Long userid=getUserId();
        Long userId = userservice.getUserIdRide(userid);
        User user=new User();
        user.setId(userId);
        ride.setPassenger(user);
        rideservice.saveRide(ride);
        return new ResponseEntity<>(new MsgResponse("Ride added successfully."), HttpStatus.CREATED);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/ride/get")
    public ResponseEntity<List<Ride>> findAllRide() throws ResourceNotFoundException {
        List<Ride> rideList = rideservice.getRide();
        return new ResponseEntity<>(rideList, HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/ride/{Id}")
    public ResponseEntity<Ride> findRideById(@PathVariable Long rideId) throws ResourceNotFoundException {
        Ride rideList = rideservice.getRideById(rideId);
        return new ResponseEntity<>(rideList, HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/getride")
    public ResponseEntity<List<Ride>> findRide() throws ResourceNotFoundException {
        Long userid=getUserId();
        Long userId = userservice.getUserIdRide(userid);
        List<Ride> rideList = rideservice.getRideDetails(userId);
        return new ResponseEntity<>(rideList, HttpStatus.OK);
    }
    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/getallride")
    public ResponseEntity<List<Ride>> findRides() throws ResourceNotFoundException {
        Long userid=getUserId();
        Long userId = userservice.getUserIdRide(userid);
        List<Ride> rideList = rideservice.getAllRide(userId);
        return new ResponseEntity<>(rideList, HttpStatus.OK);
    }

    @Autowired
    private RideDetailsService rideDetailsService;

    @PreAuthorize("isAuthenticated()")
    @PostMapping(value = "/ridedetails/add")
    public ResponseEntity<MsgResponse> addRide(@RequestBody RideDetails rideDetails) {
        rideDetailsService.saveRideDetails(rideDetails);
        return new ResponseEntity<>(new MsgResponse("Ride details added successfully."), HttpStatus.CREATED);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/ridedetails/get")
    public ResponseEntity<List<RideDetails>> findAllRideDe() throws ResourceNotFoundException {
        List<RideDetails> rideList = rideDetailsService.getRideDetails();
        return new ResponseEntity<>(rideList, HttpStatus.OK);
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/ridedetails/{Id}")
    public ResponseEntity<RideDetails> findRideDetailsById(@PathVariable Long rideId) throws ResourceNotFoundException {
        RideDetails rideDetailsList = rideDetailsService.getRideDetailsById(rideId);
        return new ResponseEntity<>(rideDetailsList, HttpStatus.OK);
    }


    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/ridecount")
    public  Long getUserIdRide() throws ResourceNotFoundException {
        Long userid=getUserId();
        Long user = userservice.getUserIdRide(userid);
        Long ridecount=rideservice.getRideCount(user);
        return ridecount;
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/requeststatus")
    public  Boolean getRequestStatus() throws ResourceNotFoundException {
        Long userid=getUserId();
        Long user = userservice.getUserIdRide(userid);
        Boolean requeststatus=rideservice.requestStatus(user);
        return requeststatus;
    }

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/userstatus")
    public  Boolean getUserStatus() throws ResourceNotFoundException {
        Long userid=getUserId();
        Long user = userservice.getUserIdRide(userid);
        Boolean status=userservice.getUserStatus(user);
        return status;
    }
//Favorite
    @Autowired
    private FavoriteService favoriteservice; 
    
    @PreAuthorize("isAuthenticated()")
    @PostMapping(value = "/favorite/add")
    public ResponseEntity<MsgResponse> addFavorite(@RequestBody Favorite favorite) {
        Long userid=getUserId();
        Long userId = userservice.getUserIdRide(userid);
        User user=new User();
        user.setId(userId);
        favorite.setUser(user);
        favoriteservice.saveFavorite(favorite);
        return new ResponseEntity<>(new MsgResponse("Favorite added successfully."), HttpStatus.CREATED);
    }
    

    @PreAuthorize("isAuthenticated()")
    @GetMapping(value = "/favorite/get")
    public ResponseEntity<List<Favorite>> findFavorite() throws ResourceNotFoundException {
        Long userid=getUserId();
        Long userId = userservice.getUserIdRide(userid);
        List<Favorite> favoriteList = favoriteservice.getFavoriteDetails(userId);
        return new ResponseEntity<>(favoriteList, HttpStatus.OK);
}
}




