package com.srmtech.automobilepoolingapp.repo;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 
import com.srmtech.automobilepoolingapp.model.LoginAttempts; 

@Repository 
public interface AttemptsRepo extends JpaRepository<LoginAttempts, Integer> { 
   Optional<LoginAttempts> findAttemptsByUsername(String username); 
}
