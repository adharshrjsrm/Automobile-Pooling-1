package com.srmtech.automobilepoolingapp.model;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.io.Serializable;
import java.sql.Time;

@Entity
public class Ride implements Serializable {
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	
	@Temporal(TemporalType.DATE)
	private Date date = new Date();

	
	@Temporal(TemporalType.TIME)
	private Date time=new Date();

	public Date getTime() {
		return this.time;
	}

	public void setTime(Date time) {
		this.time = time;
	}
	

		
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="owner_id", referencedColumnName = "id")
	private User owner;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="passenger_id", referencedColumnName = "id")
	private User passenger;

	public User getPassenger() {
		return this.passenger;
	}

	public void setPassenger(User passenger) {
		this.passenger = passenger;
	}

	public User getOwner() {
		return owner;
	}

	public void setOwner(User owner) {
		this.owner = owner;
	}

	public Ride() {
		//Empty
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public Date getDate() {
		return this.date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	  

}   
