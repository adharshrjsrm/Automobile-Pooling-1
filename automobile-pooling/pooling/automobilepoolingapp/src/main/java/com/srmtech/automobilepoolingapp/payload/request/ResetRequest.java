package com.srmtech.automobilepoolingapp.payload.request;
import javax.validation.constraints.NotBlank;

public class ResetRequest {
    @NotBlank
	private Long userId;

	@NotBlank
	private String password;

    public Long getUserId() {
        return this.userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
