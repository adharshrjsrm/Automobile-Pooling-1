package com.srmtech.automobilepoolingapp.model;

import java.io.Serializable;

public class UserJoin implements Serializable{

    private Long id;
   
    private String firstname;

    private String lastname;

    private String designation;

    private String source;

    public long getMobile() {
        return this.mobile;
    }

    public void setMobile(long mobile) {
        this.mobile = mobile;
    }

    private String destination;

    private String stopa;

    private String stopb;

    private long mobile;

    private Boolean availabilitystatus;

    private String vehiclenumber;

    public String getLastname() {
        return this.lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getDesignation() {
        return this.designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getSource() {
        return this.source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getDestination() {
        return this.destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getStopa() {
        return this.stopa;
    }

    public void setStopa(String stopa) {
        this.stopa = stopa;
    }

    public String getStopb() {
        return this.stopb;
    }

    public void setStopb(String stopb) {
        this.stopb = stopb;
    }

    public String getVehiclenumber() {
        return this.vehiclenumber;
    }

    public void setVehiclenumber(String vehiclenumber) {
        this.vehiclenumber = vehiclenumber;
    }

    public String getVehiclecolor() {
        return this.vehiclecolor;
    }

    public void setVehiclecolor(String vehiclecolor) {
        this.vehiclecolor = vehiclecolor;
    }

    public String getVehicletype() {
        return this.vehicletype;
    }

    public void setVehicletype(String vehicletype) {
        this.vehicletype = vehicletype;
    }

    private String vehiclecolor;

    private String vehicletype;

    private Integer numberofseats;

    private Long ridecount;

    


    public Boolean isAvailabilitystatus() {
        return this.availabilitystatus;
    }

    public Boolean getAvailabilitystatus() {
        return this.availabilitystatus;
    }

    public void setAvailabilitystatus(Boolean availabilitystatus) {
        this.availabilitystatus = availabilitystatus;
    }

    public Long getRidecount() {
        return this.ridecount;
    }

    public void setRidecount(Long ridecount) {
        this.ridecount = ridecount;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstname() {
        return this.firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public Integer getNumberofseats() {
        return this.numberofseats;
    }

    public void setNumberofseats(Integer numberofseats) {
        this.numberofseats = numberofseats;
    }
   
   
    


    public UserJoin(Long id, String firstname, String lastname, String designation, String source, String destination, String stopa, String stopb, long mobile,Boolean availabilitystatus, String vehiclenumber, String vehiclecolor, String vehicletype, Integer numberofseats, Long ridecount) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.designation = designation;
        this.source = source;
        this.destination = destination;
        this.stopa = stopa;
        this.stopb = stopb;
        this.mobile=mobile;
        this.availabilitystatus = availabilitystatus;
        this.vehiclenumber = vehiclenumber;
        this.vehiclecolor = vehiclecolor;
        this.vehicletype = vehicletype;
        this.numberofseats = numberofseats;
        this.ridecount = ridecount;
    }
   
    
  

    public UserJoin() {
    }


  

    
}
