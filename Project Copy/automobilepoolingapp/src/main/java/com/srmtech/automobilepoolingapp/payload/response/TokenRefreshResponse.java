package com.srmtech.automobilepoolingapp.payload.response;


public class TokenRefreshResponse {
    private String accessToken;
    private String refreshToken;
    private String tokenType = "Bearer";

      public String getAccessToken() {
        return accessToken;
      }
    
      public void setAccessToken(String token) {
        this.accessToken = token;
      }
    
      public String getRefreshToken() {
        return refreshToken;
      }
    
      public void setRefreshToken(String refreshToken) {
        this.refreshToken = refreshToken;
      }
    
      public String getTokenType() {
        return tokenType;
      }
    
      public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
      }
    
}
