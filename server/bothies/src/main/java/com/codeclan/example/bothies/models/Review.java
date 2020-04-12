package com.codeclan.example.bothies.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table( name= "reviews")

public class Review {

    // Instance variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "comments")
    private String comments;

    @Column(name = "rating")
    private int rating;

    @JsonIgnoreProperties(value = "reviews")
    @ManyToOne
    @JoinColumn(name = "account_id")
    private Account account;

    // Constructor
    public Review(String comments, int rating, Account account) {
        this.comments = comments;
        this.rating = rating;
        this.account = account;
    }
    // ends constructor
    // Default Constructor

    public Review() {
        }

    //Getters and Setters

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
        public Account getAccount () {
            return account;
        }
        public void setAccount (Account account){
            this.account = account;
        }
    }//ends class