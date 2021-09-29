package com.srmtech.automobilepoolingapp.model;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import java.io.Serializable;
import java.util.Collection;

@Entity
public class Ride implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date dateTime = new Date(System.currentTimeMillis());

	@OneToMany(fetch = FetchType.LAZY)
	@JoinColumn(name="ride_id",referencedColumnName="id")
	private Collection<RideDetails> ridedetails;
		

	public Ride() {
		//Empty
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	public Date getDateTime() {
		return this.dateTime;
	}

	public void setDateTime(Date dateTime) {
		this.dateTime = dateTime;
	}


	public Collection<RideDetails> getRidedetails() {
		return ridedetails;
	}

	public void setRidedetails(Collection<RideDetails> ridedetails) {
		this.ridedetails = ridedetails;
	}



	  

}   
