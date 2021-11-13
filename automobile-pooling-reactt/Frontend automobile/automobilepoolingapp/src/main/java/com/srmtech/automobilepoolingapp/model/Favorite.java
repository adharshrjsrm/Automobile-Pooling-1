
	package com.srmtech.automobilepoolingapp.model;

	import java.util.Date;
	import javax.persistence.Entity;
	import javax.persistence.FetchType;
	import javax.persistence.GeneratedValue;
	import javax.persistence.GenerationType;
	import javax.persistence.Id;
	import javax.persistence.JoinColumn;
	import javax.persistence.ManyToOne;
	import javax.persistence.Temporal;
	import javax.persistence.TemporalType;

	import java.io.Serializable;

	@Entity
	public class Favorite implements Serializable {
		private static final long serialVersionUID = 1L;
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		 private Long id;
		
		@Temporal(TemporalType.DATE)
		private Date date = new Date();

			
		@ManyToOne(fetch = FetchType.EAGER)
		@JoinColumn(name="user_id", referencedColumnName = "id")
		private User user;

		@ManyToOne(fetch = FetchType.EAGER)
		@JoinColumn(name="favorite_id", referencedColumnName = "id")
		private User favorite;


		public User getUser() {
			return user;
		}

		public void setUser(User user) {
			this.user = user;
		}

	

		public User getFavorite() {
			return favorite;
		}

		public void setFavorite(User favorite) {
			this.favorite = favorite;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}


		public Date getDate() {
			return this.date;
		}

		public void setDate(Date date) {
			this.date = date;
		}

		public Favorite() {
			super();
			// TODO Auto-generated constructor stub
		}

		  

	}   


