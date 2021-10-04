package com.srmtech.automobilepoolingapp.model;

import java.time.Instant;

import javax.persistence.*;

@Entity(name = "refreshtoken")
public class RefreshToken {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  @OneToOne
  @JoinColumn(name = "user_login_id", referencedColumnName = "id")
  private UserLogin user;

  private String uname;

  public String getUname() {
    return this.uname;
  }

  public void setUname(String uname) {
    this.uname = uname;
  }

  @Column(nullable = false, unique = true)
  private String token;

  @Column(nullable = false)
  private Instant expiryDate;

  public RefreshToken() {
    // Empty Constructor
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public UserLogin getUser() {
    return this.user;
  }

  public void setUser(UserLogin user) {
    this.user = user;
  }
 
  public String getToken() {
    return token;
  }

  public void setToken(String token) {
    this.token = token;
  }

  public Instant getExpiryDate() {
    return expiryDate;
  }

  public void setExpiryDate(Instant expiryDate) {
    this.expiryDate = expiryDate;
  }

}
