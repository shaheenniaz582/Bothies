package com.codeclan.example.bothies.models;

import javax.persistence.*;

@Entity
@Table ( name ="reviews")
public class Review {

    // Instance Variables
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;
    @Column( name = "visitor_first_name")
    private String visitorFirstName;
    @Column(name = "visitor_last_name")
    private String visitorLastName;
    @Column( name = "comments")
    private String comments;
    @Column(name = "rating")
    private int Rating;

    // Constructor

    public Review(String visitorFirstName, String visitorLastName, String comments, int rating) {
        this.visitorFirstName = visitorFirstName;
        this.visitorLastName = visitorLastName;
        this.comments = comments;
        Rating = rating;
    } // ends constructor


    // Default Constructor
    public Review(){}

    // Getter & Setter


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVisitorFirstName() {
        return visitorFirstName;
    }

    public void setVisitorFirstName(String visitorFirstName) {
        this.visitorFirstName = visitorFirstName;
    }

    public String getVisitorLastName() {
        return visitorLastName;
    }

    public void setVisitorLastName(String visitorLastName) {
        this.visitorLastName = visitorLastName;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public int getRating() {
        return Rating;
    }

    public void setRating(int rating) {
        Rating = rating;
    }
}
