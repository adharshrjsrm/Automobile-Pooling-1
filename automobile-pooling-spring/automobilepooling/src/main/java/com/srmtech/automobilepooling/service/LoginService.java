package com.srmtech.automobilepooling.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import com.srmtech.automobilepooling.model.Login;
import com.srmtech.automobilepooling.repo.LoginRepo;
import com.srmtech.automobilepooling.exception.EmailNotFoundException;
@Service
public class LoginService implements LoginDetailsService{
    @Autowired
    private LoginRepo loginRepo;

    @Override
    public LoginDetails loadbyEmail(String email) throws EmailNotFoundException {
       Login login = loginRepo.findByEmail(email);
       LoginDetails loginDetails = (LoginDetails) new com.srmtech.automobilepooling.model.Login(login.getEmail(),
				login.getPassword());
		
		return loginDetails;
    }

}
