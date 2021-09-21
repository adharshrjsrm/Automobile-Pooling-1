package com.example.demo.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "department", uniqueConstraints = {@UniqueConstraint(columnNames = "department_name")})
public class Department implements Serializable{

	private static final long serialVersionUID = 1L;
    
    
    @Id
    @Column(name="id")
    private long id;

    public Department(@NotBlank @Size(max = 45) String departmentname) {
        this.departmentname = departmentname;
    }

    @Column(name="department_name")
    @NotBlank
    @Size(max = 45)
    private String departmentname;

    public String getDepartmentname() {
        return departmentname;
    }

    public void setDepartmentname(String departmentname) {
        this.departmentname = departmentname;
    }
    
    
    @OneToOne(fetch = FetchType.LAZY)
  	@JoinColumn(name = "id", referencedColumnName = "id")

  	private User user;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	

	public Department(long id, @NotBlank @Size(max = 45) String departmentname) {
		super();
		this.id = id;
		this.departmentname = departmentname;
	}

	
	
    
}
