package com.srmtech.automobilepooling.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "user_login", uniqueConstraints = {@UniqueConstraint(columnNames = "email")})
public class Login implements Serializable{

	private static final long serialVersionUID = 1L;

    @Id
    @Column(name="user_id")
    private long id;

  
    public Login(String email, String password) {
        this.email = email;
        this.password = password;
    }

    @NotBlank
    @Email
    @Size(max = 45)
    @Column(name="email")
    private String email;

    @NotBlank
    @Size(max= 240)
    @Column(name="password")
    private String password;


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}   

