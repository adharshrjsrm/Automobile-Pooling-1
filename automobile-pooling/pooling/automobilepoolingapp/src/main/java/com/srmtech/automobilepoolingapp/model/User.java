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
    
    @NotBlank(message = "Name is mandatory")
    @Column(name="name")
    private String name;
    
   
    @Column(name="mobile_number")
    private long mobile;
    
    
	//@NotBlank(message = "Designation is mandatory")
    @Column(name="designation")
    private String designation;

   
    // @Column(name="source_latitude")
    // private double sourcelat;
    
    
    
    // @Column(name="source_longitude")
    // private double sourcelon;
    

	// @Column(name="destination_latitude")
    // private double destinationlat;
    
    
    // @Column(name="destination_longitude")
    // private double destinationlon;
    
    	
    
    @Column(name="availability_status")
    private boolean availabilitystatus;

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


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}





	public boolean isAvailabilitystatus() {
		return availabilitystatus;
	}


	public void setAvailabilitystatus(boolean availabilitystatus) {
		this.availabilitystatus = availabilitystatus;
	}


	public long getMobile() {
		return mobile;
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

	// public double getSourcelat() {
	// 	return sourcelat;
	// }


	// public void setSourcelat(double sourcelat) {
	// 	this.sourcelat = sourcelat;
	// }


	// public double getSourcelon() {
	// 	return sourcelon;
	// }


	// public void setSourcelon(double sourcelon) {
	// 	this.sourcelon = sourcelon;
	// }


	// public double getDestinationlat() {
	// 	return destinationlat;
	// }


	// public void setDestinationlat(double destinationlat) {
	// 	this.destinationlat = destinationlat;
	// }


	// public double getDestinationlon() {
	// 	return destinationlon;
	// }


	// public void setDestinationlon(double destinationlon) {
	// 	this.destinationlon = destinationlon;
	// }

	public boolean getAvailabilitystatus() {
		return this.availabilitystatus;
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
	
	
	


