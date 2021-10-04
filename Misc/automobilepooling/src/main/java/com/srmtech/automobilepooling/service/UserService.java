package com.srmtech.automobilepooling.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.srmtech.automobilepooling.model.User;
import com.srmtech.automobilepooling.repo.UserRepo;



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

	public List<User> getUser() throws Exception {
		return repository.findAll();
	}

	public User getUserById(int id) {

		return repository.findById(id).orElse(null);

	}

	public String deleteUser(int id) {
		repository.deleteById(id);
		return "product removed !! " + id;
	}
	
	public User updateUser(User user) {
	User existingUser = repository.findById(user.getId()).orElse(null);
	existingUser.setId(user.getId());
	existingUser.setName(user.getName());
	existingUser.setMobile(user.getMobile());
	existingUser.setUsertype(user.getUsertype());
	existingUser.setDepartment(user.getDepartment());
	existingUser.setSource_lat(user.getSource_lat());
	existingUser.setSource_lon(user.getSource_lon());
	existingUser.setDestination_lat(user.getDestination_lat());
	return repository.save(existingUser);
}


}
