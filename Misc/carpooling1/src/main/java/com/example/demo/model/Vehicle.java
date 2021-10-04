package com.example.demo.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class Vehicle implements Serializable {
	
	
	private static final long serialVersionUID = 1L;

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
   
	
    @Column(name="vehicle_number")
    private String vehiclenumber;
    
    
    @Column(name="vehicle_color")
    private String vehiclecolor;
    
    @Column(name="number_of_seats")
    private int numberofseats;
    
 
    public String getVehiclecolor() {
		return vehiclecolor;
	}


	public void setVehiclecolor(String vehiclecolor) {
		this.vehiclecolor = vehiclecolor;
	}
 
  public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getVehiclenumber() {
		return vehiclenumber;
	}


	public void setVehiclenumber(String vehiclenumber) {
		this.vehiclenumber = vehiclenumber;
	}


	public int getNumberofseats() {
		return numberofseats;
	}


	public void setNumberofseats(int numberofseats) {
		this.numberofseats = numberofseats;
	}
	
	

}
