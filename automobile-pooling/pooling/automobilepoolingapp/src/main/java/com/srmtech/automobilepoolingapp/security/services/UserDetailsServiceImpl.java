package com.srmtech.automobilepoolingapp.security.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.srmtech.automobilepoolingapp.model.UserLogin;
import com.srmtech.automobilepoolingapp.repo.LoginRepo;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	LoginRepo userRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		UserLogin user = userRepository.findByemail(email)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + email));

		return UserDetailsImpl.build(user);
	}


}