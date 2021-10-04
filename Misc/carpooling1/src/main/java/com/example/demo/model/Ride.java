package com.example.demo.model;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Collection;

@Entity
public class Ride {
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	
	 @Temporal(TemporalType.TIMESTAMP)
	 private Date DateTime = new Date(System.currentTimeMillis());
	 

	 @OneToMany(fetch = FetchType.LAZY)
	    @JoinColumn(name="ride_id",referencedColumnName="id")
		private Collection<RideDetails> ridedetails;
		

	public Ride() {
	
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDateTime() {
		return DateTime;
	}

	public void setDateTime(Date dateTime) {
		DateTime = dateTime;
	}

	public Collection<RideDetails> getRidedetails() {
		return ridedetails;
	}

	public void setRidedetails(Collection<RideDetails> ridedetails) {
		this.ridedetails = ridedetails;
	}



	  

}   
