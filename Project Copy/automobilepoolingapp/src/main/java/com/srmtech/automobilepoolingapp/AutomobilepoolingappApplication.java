package com.srmtech.automobilepoolingapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3000)
@SpringBootApplication
public class AutomobilepoolingappApplication {

	public static void main(String[] args) {
		SpringApplication.run(AutomobilepoolingappApplication.class, args);
	}

}
