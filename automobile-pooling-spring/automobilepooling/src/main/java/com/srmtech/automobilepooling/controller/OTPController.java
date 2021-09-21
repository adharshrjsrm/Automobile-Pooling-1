package com.srmtech.automobilepooling.controller;
import java.util.HashMap;
import java.util.Map;

import com.srmtech.automobilepooling.service.EmailService;
import com.srmtech.automobilepooling.service.OTPService;
import com.srmtech.automobilepooling.util.EmailUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;



@Controller
public class OTPController {
	
	
	@Autowired
	public OTPService otpService;
	
	@Autowired
	public EmailService emailService;

	@GetMapping("/generateOtp")
	public String generateOtp(){
		
		Authentication auth = SecurityContextHolder.getContext().getAuthentication(); 
		String username = auth.getName();
		
		int otp = otpService.generateOTP(username);
		 
		EmailUtil template = new EmailUtil("SendOtp.html");
		
		Map<String,String> replacements = new HashMap<String,String>();
		replacements.put("user", username);
		replacements.put("otpnum", String.valueOf(otp));
		 
		String message = template.getTemplate(replacements);
		
		emailService.sendOtpMessage("adharshrj@srmtech.com", "OTP -SpringBoot", message);
		
		return "otppage";
	}
	
	@GetMapping(value ="/validateOtp")
	public @ResponseBody String validateOtp(@RequestParam("otpnum") int otpnum){
		
		final String SUCCESS = "Entered Otp is valid";
		
		final String FAIL = "Entered Otp is NOT valid. Please Retry!";
		
		Authentication auth = SecurityContextHolder.getContext().getAuthentication(); 
		String username = auth.getName();
		
		if(otpnum >= 0){
			int serverOtp = otpService.getOtp(username);
			
			if(serverOtp > 0){
				if(otpnum == serverOtp){
					otpService.clearOTP(username);
					return ("Entered Otp is valid");
				}else{
					return SUCCESS;	
				}
			}else {
				return FAIL;			
			}
		}else {
			return FAIL;	
		}
	}
}

