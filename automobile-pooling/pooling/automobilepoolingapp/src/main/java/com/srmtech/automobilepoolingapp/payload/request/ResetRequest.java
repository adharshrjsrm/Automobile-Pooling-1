package com.srmtech.automobilepoolingapp.payload.request;
import javax.validation.constraints.NotBlank;

public class ResetRequest {
    private Long id;

    @NotBlank
	private String email;

    @NotBlank
	private String password;

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
