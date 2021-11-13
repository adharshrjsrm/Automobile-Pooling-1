

	package com.srmtech.automobilepoolingapp.service;

	import java.util.Date;
	import java.util.List;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.stereotype.Service;

	import com.srmtech.automobilepoolingapp.exception.ResourceNotFoundException;
import com.srmtech.automobilepoolingapp.model.Favorite;
import com.srmtech.automobilepoolingapp.repo.FavoriteRepo;


	@Service
	public class FavoriteService {
		
		@Autowired
		private FavoriteRepo favoriterepo;
		

		public Favorite saveFavorite(Favorite favorite) {
			return favoriterepo.save(favorite);
		}

		
		public List<Favorite> getFavorite() throws ResourceNotFoundException {
			return favoriterepo.findAll();
		}
		public Favorite getFavoriteById(Long id) {

			return favoriterepo.findById(id).orElse(null);

		}


	    public List<Favorite> getFavoriteDetails(Long userId) {
			Date date=new Date();
	        return favoriterepo.getFavoriteDetails(userId,date);
	    }
//		public List<Favorite> getAllFavorite(Long userId) {
//	        return favoriterepo.getAllFavorite(userId);
//	    }


//	    public Long getRideCount(Long user) {
//	        return riderepo.getRideCount(user);
//	    }
	}


