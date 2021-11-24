package com.srmtech.automobilepoolingapp.controller;

import javax.validation.Valid;

import com.srmtech.automobilepoolingapp.exception.ResourceNotFoundException;
import com.srmtech.automobilepoolingapp.model.ConfirmationTokenModel;
import com.srmtech.automobilepoolingapp.model.RefreshToken;
import com.srmtech.automobilepoolingapp.model.UserLogin;
import com.srmtech.automobilepoolingapp.payload.request.LogOutRequest;
import com.srmtech.automobilepoolingapp.payload.request.LoginRequest;
import com.srmtech.automobilepoolingapp.payload.request.ResetRequest;
import com.srmtech.automobilepoolingapp.payload.request.SignupRequest;
import com.srmtech.automobilepoolingapp.payload.request.VerifyRequest;
import com.srmtech.automobilepoolingapp.payload.response.JwtResponse;
import com.srmtech.automobilepoolingapp.payload.response.MsgResponse;
import com.srmtech.automobilepoolingapp.repo.ConfirmationTokenRepo;
import com.srmtech.automobilepoolingapp.repo.LoginRepo;
import com.srmtech.automobilepoolingapp.security.jwt.JwtUtils;
import com.srmtech.automobilepoolingapp.security.services.RefreshTokenService;
import com.srmtech.automobilepoolingapp.security.services.UserDetailsImpl;
import com.srmtech.automobilepoolingapp.service.EmailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3000)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	LoginRepo userRepository;

	@Autowired
	ConfirmationTokenRepo confirmationTokenRepo;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	@Autowired
    private EmailService emailService;

	@Autowired
	RefreshTokenService refreshTokenService;

	@PostMapping("/signup")
	public ResponseEntity<MsgResponse> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		if (Boolean.TRUE.equals(userRepository.existsByEmail(signUpRequest.getEmail()))) {
			return ResponseEntity
					.badRequest()
					.body(new MsgResponse("Error: Email is already taken!"));
		}

		if (Boolean.TRUE.equals(userRepository.existsByEmail(signUpRequest.getEmail()))) {
			return ResponseEntity
					.badRequest()
					.body(new MsgResponse("Error: Email is already in use!"));
		}

		
		UserLogin user = new UserLogin(
							 signUpRequest.getEmail(),
							 encoder.encode(signUpRequest.getPassword()));

		userRepository.save(user);


		ConfirmationTokenModel confirmationToken = new ConfirmationTokenModel(user);
		confirmationTokenRepo.save(confirmationToken);

		SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo(user.getEmail());
            mailMessage.setSubject("Complete Registration!");
			mailMessage.setText("To confirm your account, please click here : "
            +"http://localhost:9000/api/auth/confirm-account?token="+confirmationToken.getConfirmationToken());
		
		emailService.sendEmail(mailMessage);

		return ResponseEntity.ok(new MsgResponse("Registered successfully!"));
	}

	@RequestMapping(value="/confirm-account", method= {RequestMethod.GET, RequestMethod.POST})
	public ResponseEntity<MsgResponse> confirmUser(@Valid VerifyRequest verifyRequest, @RequestParam("token")String confirmationToken) throws ResourceNotFoundException {
		{
			ConfirmationTokenModel token = confirmationTokenRepo.findByConfirmationToken(confirmationToken);
	
			if(token != null)
			{
				UserLogin user = userRepository.findByemail(token.getUserLogin().getEmail()).orElseThrow();
				user.setEnabled(true);
				userRepository.save(user);
			}
			else
			{
				throw new ResourceNotFoundException("Not found");
			}

			
		} return ResponseEntity.ok(new MsgResponse("Account Verified"));
	}

	@PostMapping("/signin")
	public ResponseEntity<JwtResponse> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) throws ResourceNotFoundException {
  
	  Authentication authentication = authenticationManager
		  .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
  
	  SecurityContextHolder.getContext().setAuthentication(authentication);
  
	  UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
  
	  String jwt = jwtUtils.generateJwtToken(userDetails);
  
  
	  RefreshToken refreshToken = refreshTokenService.createRefreshToken(userDetails.getId());
  
	  return ResponseEntity.ok(new JwtResponse(jwt, refreshToken.getToken(), userDetails.getId(), userDetails.getEmail()));
	}

	@PostMapping("/logout")
	public ResponseEntity<MsgResponse> logoutUser(@Valid @RequestBody LogOutRequest logOutRequest) throws ResourceNotFoundException {
	  refreshTokenService.deleteByUserId(logOutRequest.getUserId());
	  return ResponseEntity.ok(new MsgResponse("Log out successful!"));
	}


	@PutMapping("/resetpassword/{id}")
	public ResponseEntity<MsgResponse> updateAdmin(@Valid @PathVariable(value = "id") Long userLong,
            @Valid @RequestBody ResetRequest resetRequest) throws ResourceNotFoundException {
                UserLogin userLogin = userRepository.findById(userLong)
                .orElseThrow();

                userLogin.setPassword(encoder.encode(resetRequest.getPassword()));
        		userRepository.save(userLogin);
        return ResponseEntity.ok(new MsgResponse("Password reset successful!"));
    }

}