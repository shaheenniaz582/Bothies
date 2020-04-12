package com.codeclan.example.bothies.controllers;

import com.codeclan.example.bothies.models.Review;
import com.codeclan.example.bothies.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(value="/reviews")
public class ReviewController {

    @Autowired
    ReviewRepository reviewRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Review>> getReview(@PathVariable Long id){
        return new ResponseEntity<>(reviewRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity createReview(@RequestBody Review review){
        reviewRepository.save(review);
        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Optional<Review>> deleteReview(@PathVariable Long id){
        reviewRepository.deleteById(id);
        return new ResponseEntity(reviewRepository.findAll(), HttpStatus.OK);
    }
}