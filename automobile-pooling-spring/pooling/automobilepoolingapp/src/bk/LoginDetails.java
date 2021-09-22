package com.srmtech.automobilepoolingapp.service;
import java.io.Serializable;

public interface LoginDetails extends Serializable  {
    String getEmail();
    String getPassword();
    boolean isUnlocked();
}
