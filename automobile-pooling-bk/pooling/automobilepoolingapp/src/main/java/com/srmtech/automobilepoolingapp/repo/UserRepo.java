package com.srmtech.automobilepoolingapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import com.srmtech.automobilepoolingapp.model.User;
import com.srmtech.automobilepoolingapp.model.UserJoin;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    @Query("from com.srmtech.automobilepoolingapp.model.User where availabilitystatus=true")
    List<User> getOwner();

    @Query("select new com.srmtech.automobilepoolingapp.model.UserJoin(u.id,u.firstname,u.lastname,u.designation,u.source,u.destination,u.stopa,u.stopb,"+
    "u.availabilitystatus,v.vehiclenumber,v.vehiclecolor,v.vehiclemodel,v.numberofseats,count(r.owner.id))"
    +" from com.srmtech.automobilepoolingapp.model.User u left outer Join com.srmtech.automobilepoolingapp.model.Ride r on u.id=r.owner.id and r.date=?1 "
    +"inner join com.srmtech.automobilepoolingapp.model.Vehicle v on u.vehicle=v  group by u.id  having v.numberofseats>count(r.owner.id) and u.availabilitystatus=true")
    List<UserJoin> getOwners(Date date);

    @Query("from com.srmtech.automobilepoolingapp.model.User where user_details_id=?1")
    Optional<User> findByUserId(Long id);

    @Query("from com.srmtech.automobilepoolingapp.model.User where vehicle_id=null")
    Optional<User> findVehicleByUserId(Long id);

    @Transactional
    @Modifying
    @Query("update com.srmtech.automobilepoolingapp.model.User set vehicle_id=?2 where user_details_id=?1")
    void updateVehicleId(long userId,long vehicleId);

    @Query("select count(id)>0 from  com.srmtech.automobilepoolingapp.model.User where user_details_id=?1")
    Boolean existByUserDetails(Long userid);

    @Query("select id from  com.srmtech.automobilepoolingapp.model.User where user_details_id=?1")
    Long getUserIdRide(Long userid);


    @Transactional
    @Modifying
    @Query("update com.srmtech.automobilepoolingapp.model.User set availability_status=?1 where id=?2")
    void updateStatus(Boolean status,long userId);

    @Query("select availabilitystatus from com.srmtech.automobilepoolingapp.model.User where id=?1")
    Boolean getUserStatus(Long user);

}
