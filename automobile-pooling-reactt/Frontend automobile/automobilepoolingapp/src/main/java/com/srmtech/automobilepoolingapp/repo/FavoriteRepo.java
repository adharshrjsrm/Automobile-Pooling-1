package com.srmtech.automobilepoolingapp.repo;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.srmtech.automobilepoolingapp.model.Favorite;


public interface FavoriteRepo extends JpaRepository<Favorite,Long> {
    
    @Query("from com.srmtech.automobilepoolingapp.model.Favorite where user_id=?1")
    List<Favorite> getFavoriteDetails(Long userId, Date date);

}
