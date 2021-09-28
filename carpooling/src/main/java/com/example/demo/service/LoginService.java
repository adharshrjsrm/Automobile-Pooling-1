package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo.repo.LoginRepo;

@Service
public class LoginService implements LoginDetailsService{
    @Autowired
    private LoginRepo loginRepo;

	@Override
	public LoginDetails loadbyEmail(String email) {
		// TODO Auto-generated method stub
		return null;
	}

//    @Override
//    public LoginDetails loadbyEmail(String email) throws EmailNotFoundException {
//       Login login = loginRepo.findByEmail(email);
//       LoginDetails loginDetails = (LoginDetails) new com.srmtech.automobilepooling.model.Login(login.getEmail(),
//				login.getPassword());
//		
//		return loginDetails;
//    }
//
}
