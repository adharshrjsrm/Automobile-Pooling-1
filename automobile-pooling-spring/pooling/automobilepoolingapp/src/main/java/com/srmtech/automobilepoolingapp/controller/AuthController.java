package com.srmtech.automobilepoolingapp.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.srmtech.automobilepoolingapp.model.*;
import com.srmtech.automobilepoolingapp.payload.request.*;
import com.srmtech.automobilepoolingapp.payload.response.*;
import com.srmtech.automobilepoolingapp.repo.*;
import com.srmtech.automobilepoolingapp.security.jwt.*;
import com.srmtech.automobilepoolingapp.security.services.*;

@CrossOrigin(origins = "*", maxAge = 3000)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	LoginRepo userRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@Autowired
	RefreshTokenService refreshTokenService;

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		if (Boolean.TRUE.equals(userRepository.existsByUsername(signUpRequest.getUsername()))) {
			return ResponseEntity
					.badRequest()
					.body(new MsgResponse("Error: Username is already taken!"));
		}

		if (Boolean.TRUE.equals(userRepository.existsByEmail(signUpRequest.getEmail()))) {
			return ResponseEntity
					.badRequest()
					.body(new MsgResponse("Error: Email is already in use!"));
		}

		
		UserLogin user = new UserLogin(signUpRequest.getUsername(), 
							 signUpRequest.getEmail(),
							 encoder.encode(signUpRequest.getPassword()));

		userRepository.save(user);

		return ResponseEntity.ok(new MsgResponse("Registered successfully!"));
	}

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
  
	  Authentication authentication = authenticationManager
		  .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
  
	  SecurityContextHolder.getContext().setAuthentication(authentication);
  
	  UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
  
	  String jwt = jwtUtils.generateJwtToken(userDetails);
  
  
	  RefreshToken refreshToken = refreshTokenService.createRefreshToken(userDetails.getId());
  
	  return ResponseEntity.ok(new JwtResponse(jwt, refreshToken.getToken(), userDetails.getId(),
		  userDetails.getUsername(), userDetails.getEmail()));
	}

	@PostMapping("/logout")
	public ResponseEntity<?> logoutUser(@Valid @RequestBody LogOutRequest logOutRequest) {
	  refreshTokenService.deleteByUserId(logOutRequest.getUserId());
	  return ResponseEntity.ok(new MsgResponse("Log out successful!"));
	}
}