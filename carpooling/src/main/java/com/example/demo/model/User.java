package com.example.demo.model;
import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;


@Entity
@Table(name = "user", uniqueConstraints = {@UniqueConstraint(columnNames = "mobile_number")}) 
public class User implements Serializable{

	private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    
   
    @NotBlank(message = "Name is mandatory")
    @Column(name="name")
    private String name;
    
   
    @Column(name="mobile_number")
    private long mobile;
    
    
    @NotBlank(message = "UserType is mandatory")
    @Column(name="user_type")
    private String usertype;
    
   
   
    @Column(name="source_latitude")
    private double source_lat;
    
    
    
    @Column(name="source_longitude")
    private double source_lon;
    
    
    
    @Column(name="destination_latitude")
    private double destination_lat;
    
    
    @Column(name="destination_longitude")
    private double destination_lon;
    
    	
    
    @Column(name="availability_status")
    private boolean availabilitystatus;

    
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}



	public String getUsertype() {
		return usertype;
	}


	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}


	public boolean isAvailabilitystatus() {
		return availabilitystatus;
	}


	public void setAvailabilitystatus(boolean availabilitystatus) {
		this.availabilitystatus = availabilitystatus;
	}


	public double getSource_lat() {
		return source_lat;
	}


	public void setSource_lat(double source_lat) {
		this.source_lat = source_lat;
	}


	public double getSource_lon() {
		return source_lon;
	}


	public void setSource_lon(double source_lon) {
		this.source_lon = source_lon;
	}


	public double getDestination_lat() {
		return destination_lat;
	}


	public void setDestination_lat(double destination_lat) {
		this.destination_lat = destination_lat;
	}


	public double getDestination_lon() {
		return destination_lon;
	}


	public void setDestination_lon(double destination_lon) {
		this.destination_lon = destination_lon;
	}


	


	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "department_id", referencedColumnName = "id")
	private Department department;


	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
	}


	public Department getDepartment() {
		return department;
	}


	public void setDepartment(Department department) {
		this.department = department;
	}
	
	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "vehicle_id", referencedColumnName = "id")
	private Vehicle vehicle;


	public Vehicle getVehicle() {
		return vehicle;
	}


	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}


}
	
	
	


