package com.codeclan.example.bothies.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="users")

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

<<<<<<< HEAD
    @JsonIgnoreProperties(value="users")
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Review> reviews;
=======
//    @JsonIgnoreProperties(value="users")
//    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
//    private List<Review> reviews;
>>>>>>> 30e4b231bc9d0cbc46f67bf6b6f6117ecf81dc6f

    public User(String username, String email, String password, Review review){
        this.username = username;
        this.email = email;
        this.password = password;
//        this.reviews = new ArrayList<Review>();
    }

    public User(){}
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

//    public List<Review> getReviews() {
//        return reviews;
//    }
//
//    public void setReviews(List<Review> reviews) {
//        this.reviews = reviews;
//    }
}
