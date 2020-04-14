package com.codeclan.example.bothies.models;

import javax.persistence.*;

@Entity
@Table( name= "reviews")

public class Review {

    // Instance variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "trail_id")
    private int trailId;

    @Column(name = "comments")
    private String comments;

    @Column(name = "rating")
    private int rating;

//    @JsonIgnoreProperties(value = "reviews")
//    @ManyToOne
//    @JoinColumn(name = "account_id")
//    private User user;

    // Constructor
    public Review(String comments, int rating, int trailId) {
        this.comments = comments;
        this.rating = rating;
        this.trailId = trailId;
    }
    // ends constructor
    // Default Constructor

    public Review() {
        }

    //Getters and Setters


    public int getTrailId() {
        return trailId;
    }

    public void setTrailId(int trailId) {
        this.trailId = trailId;
    }

//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }

    public Long getId () {
            return id;
        }

        public void setId (Long id){
            this.id = id;
        }

        public String getComments () {
            return comments;
        }

        public void setComments (String comments){
            this.comments = comments;
        }

        public int getRating () {
            return rating;
        }

        public void setRating ( int rating){
            this.rating = rating;
        }
    }

    //ends class