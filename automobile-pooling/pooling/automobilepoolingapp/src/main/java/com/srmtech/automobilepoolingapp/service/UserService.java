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
		System.out.println("id"+id);
		return repository.findByUserId(id).orElse(null);

	}

	public String deleteUser(Long id)  {
		repository.deleteById(id);
		return "User Deleted " + id;
	}
	public User updateUser(User user) throws ResourceNotFoundException {
		User existingUser = repository.findById(user.getId()).orElseThrow(() -> new ResourceNotFoundException("User not found: "+user.getId()));
		existingUser.setId(user.getId());
		existingUser.setFirstname(user.getFirstname());
		existingUser.setLastname(user.getLastname());
		existingUser.setMobile(user.getMobile());
		existingUser.setSource(user.getSource());
		existingUser.setDestination(user.getDestination());
		existingUser.setStopa(user.getStopa());
		existingUser.setStopb(user.getStopb());
		existingUser.setAvailabilitystatus(user.getAvailabilitystatus());
		existingUser.setDesignation(user.getDesignation());
		existingUser.setVehicle(user.getVehicle());
		return repository.save(existingUser);
	}

    public List<User> getOwner() {
        return repository.getOnwer();
    }

    public void updateVehicleId(long userId,long vehicleId) {
		repository.updateVehicleId(userId,vehicleId);
	}

    public Boolean existByUserLogin(Long userid) {
        return repository.existByUserDetails(userid);
    }
		
	


}
