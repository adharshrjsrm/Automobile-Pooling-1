package com.srmtech.automobilepoolingapp.repo;
import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 
import com.srmtech.automobilepoolingapp.model.Places;

@Repository
public interface PlacesRepo extends JpaRepository<Places, Long>{
    
}
