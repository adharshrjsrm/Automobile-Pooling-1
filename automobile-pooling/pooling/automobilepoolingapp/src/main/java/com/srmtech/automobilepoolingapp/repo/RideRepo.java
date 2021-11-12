package com.srmtech.automobilepoolingapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Date;
import java.util.List;

import com.srmtech.automobilepoolingapp.model.Ride;

public interface RideRepo extends JpaRepository<Ride,Long> {
    
    @Query("from com.srmtech.automobilepoolingapp.model.Ride where owner_id=?1 and date=?2")
    List<Ride> getRideDetails(Long userId, Date date);

    @Query("select count(id) from  com.srmtech.automobilepoolingapp.model.Ride where owner_id=?1 and date=?2")
    Long getRideCount(Long user, Date date);

    @Query("from com.srmtech.automobilepoolingapp.model.Ride where owner_id=?1")
    List<Ride> getAllRide(Long userId);

    @Query("select count(id)<2 from  com.srmtech.automobilepoolingapp.model.Ride where passenger_id=?1 and date=?2")
    Boolean requestStatus(Long userId,Date date);

}
