package com.srmtech.automobilepoolingapp.security.jwt;

import java.util.Date;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.srmtech.automobilepoolingapp.security.services.*;
import io.jsonwebtoken.*;

@Component
public class JwtUtils {
	private static final Logger logger = LoggerFactory.getLogger(JwtUtils.class);

	private String jwtSecret;
	private int jwtExpirationMs;
	
	@Value("${automobilepooling.app.jwtSecret}")
	public void setJwtsecret(String jwtSecret) {
		this.jwtSecret = jwtSecret;
	}

	@Value("${automobilepooling.app.jwtExpirationMs}")
	public void setJwtExpirationMs(int jwtExpirationMs) {
		this.jwtExpirationMs = jwtExpirationMs;
	}
	

	public String generateJwtToken(UserDetailsImpl userPrincipal) {
		return generateTokenFromUsername(userPrincipal.getUsername(),userPrincipal.getId().toString());
	  }
	
	  public String generateTokenFromUsername(String username,String id) {
		return Jwts.builder().setId(id).setSubject(username).setIssuedAt(new Date())
			.setExpiration(new Date((new Date()).getTime() + jwtExpirationMs)).signWith(SignatureAlgorithm.HS512, jwtSecret)
			.compact();
	  }
	
	  public String getUserNameFromJwtToken(String token) {
		return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
	  }
	  public String getUserIdFromJwtToken(String token) {
		return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getId();
	  }

	public boolean validateJwtToken(String authToken) {
		try {
			Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
			return true;
		} catch (SignatureException e) {
			logger.error("Invalid JWT signature: {}", e.getMessage());
		} catch (MalformedJwtException e) {
			logger.error("Invalid JWT token: {}", e.getMessage());
		} catch (ExpiredJwtException e) {
			logger.error("JWT token is expired: {}", e.getMessage());
		} catch (UnsupportedJwtException e) {
			logger.error("JWT token is unsupported: {}", e.getMessage());
		} catch (IllegalArgumentException e) {
			logger.error("JWT claims string is empty: {}", e.getMessage());
		}

		return false;
	}
}
