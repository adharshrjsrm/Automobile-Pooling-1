package com.srmtech.automobilepoolingapp.security;


import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.security.core.userdetails.UserDetails; 
import org.springframework.security.core.userdetails.UserDetailsService; 
import org.springframework.security.core.userdetails.UsernameNotFoundException; 
import org.springframework.stereotype.Service; 
import com.srmtech.automobilepoolingapp.model.UserLogin; 
import com.srmtech.automobilepoolingapp.repo.LoginRepo; 

@Service
public class SecurityUserDetailsService implements UserDetailsService { 
   @Autowired 
   private LoginRepo userRepository; 
   
   @Override 
   public UserDetails loadUserByUsername(String username) 
   throws UsernameNotFoundException { 
      UserLogin user = userRepository.findUserByUsername(username) 
         .orElseThrow(() -> new UsernameNotFoundException("User not present")); 
         return user; 
   } 
   public void createUser(UserDetails user) { 
      userRepository.save((UserLogin) user); 
   } 
}

