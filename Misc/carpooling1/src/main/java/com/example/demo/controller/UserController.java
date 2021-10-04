package com.example.demo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "user")
public class UserController {

	
	@Autowired
	private UserService userservice;
	
	

	@PostMapping(value = "/adduser")
	public ResponseEntity<String> addDetails(@Valid @RequestBody User user) {
		userservice.saveUser(user);
		String successMessage = "User added successfully.";
		ResponseEntity<String> response = new ResponseEntity<String>(successMessage, HttpStatus.CREATED);
		return response;
	}

	@GetMapping(value = "/getuser")
	public ResponseEntity<List<User>> findAllUsers() throws Exception {
		List<User> UserList = userservice.getUser();
		ResponseEntity<List<User>> response = new ResponseEntity<List<User>>(UserList, HttpStatus.OK);
		return response;
	}

	@GetMapping(value = "/{userId}")
	public ResponseEntity<User> findUserById(@PathVariable Long userId) throws Exception {
		User userList = userservice.getUserById(userId);
		ResponseEntity<User> response = new ResponseEntity<User>(userList, HttpStatus.OK);
		return response;
	}
	

	@DeleteMapping(value = "/delete/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable Long id) throws Exception {
		userservice.deleteUser(id);
		String successMessage = "User deleted successfully.";
		ResponseEntity<String> response = new ResponseEntity<String>(successMessage, HttpStatus.OK);
		return response;
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> updateUser(@Valid @RequestBody User user) {
	userservice.updateUser(user);
	String successMessage = "User updated successfully.";
	ResponseEntity<String> response = new ResponseEntity<String>(successMessage, HttpStatus.ACCEPTED);
	return response;
	}
	

}
