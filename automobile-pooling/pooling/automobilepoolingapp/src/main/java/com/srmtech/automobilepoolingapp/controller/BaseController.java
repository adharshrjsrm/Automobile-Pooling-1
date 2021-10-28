package com.srmtech.automobilepoolingapp.controller;


import com.srmtech.automobilepoolingapp.security.services.UserDetailsImpl;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

public abstract class BaseController {
    protected String getUserContext() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String username = "";

        if (principal instanceof UserDetails) {
            username = ((UserDetails) principal).getUsername();
        } else {
            username = principal.toString();
        }

        return username;
    }

    protected long getUserId() {
        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        
        if (principal instanceof UserDetails) {
            UserDetailsImpl userDetailsImpl = ((UserDetailsImpl) principal);
            return userDetailsImpl.getId();
        } else {
            return 0;
        }

    }
    

   
}