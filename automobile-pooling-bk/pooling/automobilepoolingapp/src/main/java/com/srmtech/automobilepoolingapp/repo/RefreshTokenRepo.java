package com.srmtech.automobilepoolingapp.repo;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;

import com.srmtech.automobilepoolingapp.model.RefreshToken;
import com.srmtech.automobilepoolingapp.model.UserLogin;

@Repository
public interface RefreshTokenRepo extends JpaRepository<RefreshToken, Long> {
  Optional<RefreshToken> findByToken(String token);

  @Modifying
  int deleteByUser(UserLogin user);

}
