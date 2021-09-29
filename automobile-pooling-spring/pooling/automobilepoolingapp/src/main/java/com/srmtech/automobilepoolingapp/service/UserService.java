package com.srmtech.automobilepoolingapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srmtech.automobilepoolingapp.exception.ResourceNotFoundException;
import com.srmtech.automobilepoolingapp.model.User;
import com.srmtech.automobilepoolingapp.repo.UserRepo;


@Service
public class UserService {
	@Autowired
	private UserRepo repository;
	
	public void getUser(User user) {

		repository.save(user);
	}

	public User saveUser(User user) {
		return repository.save(user);
	}

	public List<User> saveUser(List<User> user) {
		return repository.saveAll(user);
	}

	public List<User> getUser() throws ResourceNotFoundException {
		return repository.findAll();
	}

	public User getUserById(Long id) {

		return repository.findById(id).orElse(null);

	}

	public String deleteUser(Long id)  {
		repository.deleteById(id);
		return "User Deleted " + id;
	}
	public User updateUser(User user) throws ResourceNotFoundException {
		User existingUser = repository.findById(user.getId()).orElseThrow(() -> new ResourceNotFoundException("User not found: "+user.getId()));
		existingUser.setId(user.getId());
		existingUser.setName(user.getName());
		existingUser.setMobile(user.getMobile());
		existingUser.setUsertype(user.getUsertype());
		existingUser.setSourcelat(user.getSourcelat());
		existingUser.setSourcelon(user.getSourcelon());
		existingUser.setDestinationlat(user.getDestinationlat());
		existingUser.setDestinationlon(user.getDestinationlat());
		existingUser.setAvailabilitystatus(user.isAvailabilitystatus());
		existingUser.setDepartment(user.getDepartment());
		existingUser.setVehicle(user.getVehicle());
		return repository.save(existingUser);
	}
	


}
