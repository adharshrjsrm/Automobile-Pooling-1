package com.srmtech.automobilepooling.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name = "ride")
public class Ride {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long rideId;

    @Temporal(value = TemporalType.TIME)
    private Date rideTime;

    @Column(name = "owner_id")
    private Long ownerId;

    @Column(name = "owner_name")
    private String ownerName;

    @Column(name = "owner_mobile")
    private int ownerMobile;

    @Column(name = "owner_department")
    private int ownerDepartment;

    @Column(name = "owner_source_lat")
    private double ownerSourceLat;

    @Column(name = "owner_source_lon")
    private double ownerSourceLon;

    @Column(name = "owner_destination_lat")
    private double ownerDestinationLat;

    @Column(name = "owner_destination_lon")
    private double ownerDestinationLon;

    @Column(name = "vehicle_id")
    private long vehicleId;

    @Column(name = "vehicle_number")
    private String vehiclenumber;
    
    @Column(name = "vehicle_color")
    private String vehiclecolor;
    
    @Column(name = "vehicle_seats")
    private int numberofseats;

    @Column(name = "passenger_id")
    private Long passengerId;

    @Column(name = "passenger_name")
    private String passengerName;

    @Column(name = "passenger_mobile")
    private int passengerMobile;

    @Column(name = "passenger_department")
    private int passengerDepartment;

    @Column(name = "passenger_source_lat")
    private double passengerSourceLat;

    @Column(name = "passenger_source_lon")
    private double passengerSourceLon;

    @Column(name = "passenger_destination_lat")
    private double passengerDestinationLat;

    @Column(name = "passenger_destination_lon")
    private double passengerDestinationLon;

    public Ride() {
    }

    public Ride(Long rideId, Date rideTime, Long ownerId, String ownerName, int ownerMobile, int ownerDepartment,
            double ownerSourceLat, double ownerSourceLon, double ownerDestinationLat, double ownerDestinationLon,
            long vehicleId, String vehiclenumber, String vehiclecolor, int numberofseats, Long passengerId,
            String passengerName, int passengerMobile, int passengerDepartment, double passengerSourceLat,
            double passengerSourceLon, double passengerDestinationLat, double passengerDestinationLon) {
        this.rideId = rideId;
        this.rideTime = rideTime;
        this.ownerId = ownerId;
        this.ownerName = ownerName;
        this.ownerMobile = ownerMobile;
        this.ownerDepartment = ownerDepartment;
        this.ownerSourceLat = ownerSourceLat;
        this.ownerSourceLon = ownerSourceLon;
        this.ownerDestinationLat = ownerDestinationLat;
        this.ownerDestinationLon = ownerDestinationLon;
        this.vehicleId = vehicleId;
        this.vehiclenumber = vehiclenumber;
        this.vehiclecolor = vehiclecolor;
        this.numberofseats = numberofseats;
        this.passengerId = passengerId;
        this.passengerName = passengerName;
        this.passengerMobile = passengerMobile;
        this.passengerDepartment = passengerDepartment;
        this.passengerSourceLat = passengerSourceLat;
        this.passengerSourceLon = passengerSourceLon;
        this.passengerDestinationLat = passengerDestinationLat;
        this.passengerDestinationLon = passengerDestinationLon;
    }



    public Long getRideId() {
        return rideId;
    }

    public void setRideId(Long rideId) {
        this.rideId = rideId;
    }

    public Date getRideTime() {
        return rideTime;
    }

    public void setRideTime(Date rideTime) {
        this.rideTime = rideTime;
    }

    public Long getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Long ownerId) {
        this.ownerId = ownerId;
    }

    public String getOwnerName() {
        return ownerName;
    }

    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }

    public int getOwnerMobile() {
        return ownerMobile;
    }

    public void setOwnerMobile(int ownerMobile) {
        this.ownerMobile = ownerMobile;
    }

    public int getOwnerDepartment() {
        return ownerDepartment;
    }

    public void setOwnerDepartment(int ownerDepartment) {
        this.ownerDepartment = ownerDepartment;
    }

    public double getOwnerSourceLat() {
        return ownerSourceLat;
    }

    public void setOwnerSourceLat(double ownerSourceLat) {
        this.ownerSourceLat = ownerSourceLat;
    }

    public double getOwnerSourceLon() {
        return ownerSourceLon;
    }

    public void setOwnerSourceLon(double ownerSourceLon) {
        this.ownerSourceLon = ownerSourceLon;
    }

    public double getOwnerDestinationLat() {
        return ownerDestinationLat;
    }

    public void setOwnerDestinationLat(double ownerDestinationLat) {
        this.ownerDestinationLat = ownerDestinationLat;
    }

    public double getOwnerDestinationLon() {
        return ownerDestinationLon;
    }

    public void setOwnerDestinationLon(double ownerDestinationLon) {
        this.ownerDestinationLon = ownerDestinationLon;
    }

    public long getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(long vehicleId) {
        this.vehicleId = vehicleId;
    }

    public String getVehiclenumber() {
        return vehiclenumber;
    }

    public void setVehiclenumber(String vehiclenumber) {
        this.vehiclenumber = vehiclenumber;
    }

    public String getVehiclecolor() {
        return vehiclecolor;
    }

    public void setVehiclecolor(String vehiclecolor) {
        this.vehiclecolor = vehiclecolor;
    }

    public int getNumberofseats() {
        return numberofseats;
    }

    public void setNumberofseats(int numberofseats) {
        this.numberofseats = numberofseats;
    }

    public Long getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(Long passengerId) {
        this.passengerId = passengerId;
    }

    public String getPassengerName() {
        return passengerName;
    }

    public void setPassengerName(String passengerName) {
        this.passengerName = passengerName;
    }

    public int getPassengerMobile() {
        return passengerMobile;
    }

    public void setPassengerMobile(int passengerMobile) {
        this.passengerMobile = passengerMobile;
    }

    public int getPassengerDepartment() {
        return passengerDepartment;
    }

    public void setPassengerDepartment(int passengerDepartment) {
        this.passengerDepartment = passengerDepartment;
    }

    public double getPassengerSourceLat() {
        return passengerSourceLat;
    }

    public void setPassengerSourceLat(double passengerSourceLat) {
        this.passengerSourceLat = passengerSourceLat;
    }

    public double getPassengerSourceLon() {
        return passengerSourceLon;
    }

    public void setPassengerSourceLon(double passengerSourceLon) {
        this.passengerSourceLon = passengerSourceLon;
    }

    public double getPassengerDestinationLat() {
        return passengerDestinationLat;
    }

    public void setPassengerDestinationLat(double passengerDestinationLat) {
        this.passengerDestinationLat = passengerDestinationLat;
    }

    public double getPassengerDestinationLon() {
        return passengerDestinationLon;
    }

    public void setPassengerDestinationLon(double passengerDestinationLon) {
        this.passengerDestinationLon = passengerDestinationLon;
    }

    
}
