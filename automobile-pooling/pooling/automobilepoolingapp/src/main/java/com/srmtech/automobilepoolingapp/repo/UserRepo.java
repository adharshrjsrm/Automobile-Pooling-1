package com.srmtech.automobilepoolingapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import com.srmtech.automobilepoolingapp.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    @Query("from com.srmtech.automobilepoolingapp.model.User where availabilitystatus=true")
    List<User> getOnwer();

    @Query("from com.srmtech.automobilepoolingapp.model.User where user_details_id=?1")
    Optional<User> findByUserId(Long id);

    @Transactional
    @Modifying
    @Query("update com.srmtech.automobilepoolingapp.model.User set vehicle_id=?2 where user_details_id=?1")
    void updateVehicleId(long userId,long vehicleId);

    @Query("select count(id)>0 from  com.srmtech.automobilepoolingapp.model.User where user_details_id=?1")
    Boolean existByUserDetails(Long userid);

    @Query("select id from  com.srmtech.automobilepoolingapp.model.User where user_details_id=?1")
    Long getUserIdRide(Long userid);

}
