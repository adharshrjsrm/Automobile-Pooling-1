package com.srmtech.automobilepooling.service;

import java.io.Serializable;

public interface LoginDetails extends Serializable  {
    String getEmail();
    String getPassword();
}
