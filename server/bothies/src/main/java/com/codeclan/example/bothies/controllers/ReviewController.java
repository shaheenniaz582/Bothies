package com.codeclan.example.bothies.controllers;

import com.codeclan.example.bothies.models.Review;
import com.codeclan.example.bothies.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    @GetMapping(value = "/reviews")
    public ResponseEntity<List<Review>> getAllReviews(){
        return new ResponseEntity<>(reviewRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/reviews/{id}")
    public ResponseEntity<Optional<Review>> getReviewById(@PathVariable Long id){
        return new ResponseEntity<>(reviewRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/reviews")
    public ResponseEntity createReview(@RequestBody Review review){
        reviewRepository.save(review);
        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "/reviews/{id}")
    public ResponseEntity<Optional<Review>> deleteReview(@PathVariable Long id){
        reviewRepository.deleteById(id);
        return new ResponseEntity(reviewRepository.findAll(), HttpStatus.OK);
    }
}