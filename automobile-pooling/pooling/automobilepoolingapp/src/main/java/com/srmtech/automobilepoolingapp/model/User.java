package com.srmtech.automobilepoolingapp.model;
import java.io.Serializable;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;




@Entity
@Table(name = "user", uniqueConstraints = {@UniqueConstraint(columnNames = "mobile_number")}) 
public class User implements Serializable{

	private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;
    
    @Column(name="firstname")
    private String firstname;
    
    @Column(name="lastname")
    private String lastname;
    
    @Column(name="mobile_number")
    private long mobile;
    

    @Column(name="designation")
    private String designation;

	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "vehicle_id", referencedColumnName = "id")
	@Fetch(FetchMode.JOIN)
	private Vehicle vehicle;

	public User( String firstname, String lastname, long mobile, String designation, Vehicle vehicle, String source, String destination, String stopa, String stopb, Boolean availabilitystatus, UserLogin userLogin) {
		
		this.firstname = firstname;
		this.lastname = lastname;
		this.mobile = mobile;
		this.designation = designation;
		this.vehicle = vehicle;
		this.source = source;
		this.destination = destination;
		this.stopa = stopa;
		this.stopb = stopb;
		this.availabilitystatus = availabilitystatus;
		this.userLogin = userLogin;
	}
	public User(Long id,String firstname, String lastname, long mobile, String designation, Vehicle vehicle, String source, String destination, String stopa, String stopb, Boolean availabilitystatus, UserLogin userLogin) {
		this.id=id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.mobile = mobile;
		this.designation = designation;
		this.vehicle = vehicle;
		this.source = source;
		this.destination = destination;
		this.stopa = stopa;
		this.stopb = stopb;
		this.availabilitystatus = availabilitystatus;
		this.userLogin = userLogin;
	}

	@Column(name="source")
	private String source;

	@Column(name="destination")
	private String destination;

	@Column(name="stopa")
    public String stopa;

	@Column(name="stopb")
	public String stopb;

	@Column(name="availability_status")
	public Boolean availabilitystatus;

	@OneToOne(targetEntity = UserLogin.class, fetch = FetchType.EAGER)
    @JoinColumn(nullable = false, name = "user_details_id")
  	private UserLogin userLogin;

	public UserLogin getUserLogin() {
		return this.userLogin;
	}

	public void setUserLogin(UserLogin userLogin) {
		this.userLogin = userLogin;
	}
	
	public Boolean getAvailabilitystatus() {
		return this.availabilitystatus;
	}

	public void setAvailabilitystatus(Boolean availabilitystatus) {
		this.availabilitystatus = availabilitystatus;
	}
	
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}
	

	public long getMobile() {
		return mobile;
	}

	public String getFirstname() {
		return firstname;
	}


	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}


	public String getLastname() {
		return lastname;
	}


	public void setLastname(String lastname) {
		this.lastname = lastname;
	}


	public void setMobile(long mobile) {
		this.mobile = mobile;
	}
	
	public String getDesignation() {
		return this.designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}


	public Vehicle getVehicle() {
		return vehicle;
	}


	public void setVehicle(Vehicle vehicle2) {
		this.vehicle = vehicle2;
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

	public User() {
		//Empty Constructor
	}

}
	
	
	


