package com.example.demo.model;
import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

//import com.rsc.api.model.UserInfo;

@Entity
@Table(name = "user", uniqueConstraints = {@UniqueConstraint(columnNames = "mobile_number")}) 
public class User implements Serializable{

	private static final long serialVersionUID = 1L;

    @Id
    @Column(name="id")
    private int id;
    
//    @NotBlank(message = "Name is mandatory")
    @Size(max = 45)
    @Column(name="name")
    private String name;
    
    
//    @NotBlank(message = "Mobile Number is mandatory")
    @Column(name="mobile_number")
    private long mobile;
    
    
//    @NotBlank(message = "User Type is mandatory")
    @Column(name="user_type")
    private int usertype;
    
//    @NotBlank(message = "Department is mandatory")
//    @Column(name="department")
//    private int department;

//    
//    @NotBlank(message = "Source Latitude is mandatory")
    @Column(name="source_latitude")
    private double source_lat;
    
    
//    @NotBlank(message = "Source Longitude is mandatory")
    @Column(name="source_longitude")
    private double source_lon;
    
    
//    @NotBlank(message = "Destination Latitude is mandatory")
    @Column(name="destination_latitude")
    private double destination_lat;
    
//    @NotBlank(message = "Destination Longitude is mandatory")
    @Column(name="destination_longitude")
    private double destination_lon;
    
    
//    @NotBlank(message = "Availibity Status is mandatory")
    @Column(name="availibity_status")
    private boolean availibiltystatus;

    
//    
//  @OneToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name = "id", referencedColumnName = "id")
//
//	private Login login;
  
  @ManyToOne(fetch = FetchType.EAGER)
 	@JoinColumn(name = "department_id", referencedColumnName = "id")

 	private Department department;
    


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public long getMobile() {
		return mobile;
	}


	public void setMobile(long mobile) {
		this.mobile = mobile;
	}


	public int getUsertype() {
		return usertype;
	}


	public void setUsertype(int usertype) {
		this.usertype = usertype;
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


	public boolean isAvailibiltystatus() {
		return availibiltystatus;
	}


	public void setAvailibiltystatus(boolean availibiltystatus) {
		this.availibiltystatus = availibiltystatus;
	}


	public Department getDepartment() {
		return department;
	}


	public void setDepartment(Department department) {
		this.department = department;
	}


	

		
}
	
	
	


