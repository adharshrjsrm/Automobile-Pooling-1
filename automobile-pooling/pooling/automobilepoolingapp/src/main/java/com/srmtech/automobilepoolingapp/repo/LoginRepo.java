package com.srmtech.automobilepoolingapp.repo;
import java.util.Optional; 
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 
import com.srmtech.automobilepoolingapp.model.UserLogin;
@Repository
public interface LoginRepo extends JpaRepository<UserLogin, Long> {
	
	Optional<UserLogin> findByemail(String email);

	Boolean existsByUsername(String username);

	Boolean existsByEmail(String email); 
}
