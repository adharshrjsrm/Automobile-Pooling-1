package com.srmtech.automobilepoolingapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

import com.srmtech.automobilepoolingapp.model.Ride;

public interface RideRepo extends JpaRepository<Ride,Long> {
    
    @Query("from com.srmtech.automobilepoolingapp.model.Ride where owner_id=?1 and date=?2")
    List<Ride> getRideDetails(Long userId, Date date);

    @Query("select count(id) from  com.srmtech.automobilepoolingapp.model.Ride where owner_id=?1")
    Long getRideCount(Long user);

    @Query("from com.srmtech.automobilepoolingapp.model.Ride where owner_id=?1")
    List<Ride> getAllRide(Long userId);

}
