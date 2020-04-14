package com.codeclan.example.bothies.controllers;

import com.codeclan.example.bothies.models.Review;
import com.codeclan.example.bothies.models.User;
import com.codeclan.example.bothies.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping
public class UserController {
    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<Optional<User>> getUser(@PathVariable Long id){
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }
    @PostMapping(value = "/users")
    public ResponseEntity createUser(@RequestBody User user){
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Optional<User>> deleteAccount(@PathVariable Long id){
        userRepository.deleteById(id);
        return new ResponseEntity(userRepository.findAll(), HttpStatus.OK);
    }
}