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
import javax.validation.constraints.NotBlank;



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
	private Vehicle vehicle;

	@Column(name="source")
	private String source;

	@Column(name="destination")
	private String destination;

	@Column(name="stopa")
    public String stopa;

	@Column(name="stopb")
	public String stopb;


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
	

}
	
	
	


