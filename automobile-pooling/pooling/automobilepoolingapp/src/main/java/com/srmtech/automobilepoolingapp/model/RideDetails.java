package com.srmtech.automobilepoolingapp.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="ride_details")
public class RideDetails implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="ride_id", referencedColumnName = "id")
	private Ride ride;

	@ManyToOne
	@JoinColumn(name="passenger_id", referencedColumnName = "id")
	private User passenger;
	

	public Ride getRide() {
		return this.ride;
	}

	public void setRide(Ride ride) {
		this.ride = ride;
	}

	public User getPassenger() {
		return this.passenger;
	}

	public void setPassenger(User passenger) {
		this.passenger = passenger;
	}

	public RideDetails() {
		//Empty
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	

	
	
}
