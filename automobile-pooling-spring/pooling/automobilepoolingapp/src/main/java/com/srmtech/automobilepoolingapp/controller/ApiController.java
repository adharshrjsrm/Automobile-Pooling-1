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

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class ApiController extends BaseController {
    
    //User
    @Autowired
	private UserService userservice;
	
    @PreAuthorize("isAuthenticated()")
	@PostMapping(value = "/user/add")
	public ResponseEntity<MsgResponse> addDetails(@Valid @RequestBody User user) {
        userservice.saveUser(user);
		return new ResponseEntity<>(new MsgResponse("User deleted successfully."), HttpStatus.CREATED);
	}

    @PreAuthorize("isAuthenticated()")
	@GetMapping(value = "/user/get")
	public ResponseEntity<List<User>> findAllUsers() throws ResourceNotFoundException {
		List<User> userList = userservice.getUser();
		return new ResponseEntity<>(userList, HttpStatus.OK);

	}

    @PreAuthorize("isAuthenticated()")
	@GetMapping(value = "/user/{Id}")
	public ResponseEntity<User> findUserById(@PathVariable Long userId) throws ResourceNotFoundException {
		User userList = userservice.getUserById(userId);
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
    userservice.updateUser(user);
	return new ResponseEntity<>(new MsgResponse("User updated successfully."), HttpStatus.ACCEPTED);
	}

    //Department
     @Autowired
     private DepartmentService departmentService;
     
     @PreAuthorize("isAuthenticated()")
     @GetMapping(value = "/dept/get")
     public ResponseEntity<List<Department>> findAll() throws ResourceNotFoundException {
         List<Department> deptList = departmentService.getDept();
         return new ResponseEntity<>(deptList, HttpStatus.OK);
     }
     
     @PreAuthorize("isAuthenticated()")
     @GetMapping(value = "/dept/{Id}")
     public ResponseEntity<Department> findDeptById(@PathVariable int deptId) throws ResourceNotFoundException {
         Department deptList = departmentService.getById(deptId);
        return new ResponseEntity<>(deptList, HttpStatus.OK);
     }
     
     @PreAuthorize("isAuthenticated()")
     @PostMapping("/dept/add")
     public ResponseEntity<MsgResponse> updateDept(@Valid @RequestBody Department dept) {
        departmentService.saveDept(dept);
         return new ResponseEntity<>(new MsgResponse("Department added successfully"), HttpStatus.CREATED);
     }

     //Vehicle
     @Autowired
     private VehicleService vehicleservice;
     
     @PreAuthorize("isAuthenticated()")
     @GetMapping(value = "/vehicle/{Id}")
     public ResponseEntity<Vehicle> findUserById(@PathVariable int vehicleId) throws ResourceNotFoundException {
         Vehicle vehicleList = vehicleservice.getVehicleById(vehicleId);
         return new ResponseEntity<>(vehicleList, HttpStatus.OK);
     }
     
     @PreAuthorize("isAuthenticated()")
     @PostMapping(value="/vehicle/add")
     public ResponseEntity<MsgResponse> saveVehicle(@RequestBody Vehicle vehicle)
     { 
         vehicleservice.getdetails(vehicle);
         return new ResponseEntity<>(new MsgResponse("Vehicle added successfully"),HttpStatus.CREATED);
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
         return new ResponseEntity<>(new MsgResponse("Vehicle added successfully"),HttpStatus.ACCEPTED);
        }
}
  
    

