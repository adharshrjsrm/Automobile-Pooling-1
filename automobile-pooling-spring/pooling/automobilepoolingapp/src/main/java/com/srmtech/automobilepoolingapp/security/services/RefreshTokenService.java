package com.srmtech.automobilepoolingapp.security.services;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.srmtech.automobilepoolingapp.model.RefreshToken;
import com.srmtech.automobilepoolingapp.model.UserLogin;
import com.srmtech.automobilepoolingapp.repo.RefreshTokenRepo;
import com.srmtech.automobilepoolingapp.repo.LoginRepo;
import com.srmtech.automobilepoolingapp.exception.*;
@Service
public class RefreshTokenService {
  @Value("${automobilepooling.app.jwtRefreshExpirationMs}")
  private Long refreshTokenDurationMs;

  @Autowired
  private RefreshTokenRepo refreshTokenRepository;

  @Autowired
  private LoginRepo userRepository;

  public Optional<RefreshToken> findByToken(String token) {
    return refreshTokenRepository.findByToken(token);
  }

  public RefreshToken createRefreshToken(Long userId) throws ResourceNotFoundException {
    RefreshToken refreshToken = new RefreshToken();
    Optional<UserLogin> value = userRepository.findById(userId);
    if (value.isEmpty()) {
      throw new ResourceNotFoundException("User id not found");
    }
    refreshToken.setUser(value.get());
    refreshToken.setExpiryDate(Instant.now().plusMillis(refreshTokenDurationMs));
    refreshToken.setToken(UUID.randomUUID().toString());

    refreshToken = refreshTokenRepository.save(refreshToken);
    return refreshToken;
  }

  public RefreshToken verifyExpiration(RefreshToken token) {
    if (token.getExpiryDate().compareTo(Instant.now()) < 0) {
      refreshTokenRepository.delete(token);
      throw new TokenRefreshException(token.getToken(), "Refresh token was expired. Please make a new signin request");
    }

    return token;
  }

  @Transactional
  public int deleteByUserId(Long userId) throws ResourceNotFoundException {
    Optional<UserLogin> value = userRepository.findById(userId);
    if (value.isEmpty()) {
      throw new ResourceNotFoundException("User id not found");
    }
    return refreshTokenRepository.deleteByUser(value.get());
  }

}