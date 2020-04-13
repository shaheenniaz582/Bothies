package com.codeclan.example.bothies.controllers;

import com.codeclan.example.bothies.models.User;
import com.codeclan.example.bothies.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping(value="/users")
public class UserController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Optional<User>> getAccount(@PathVariable Long id){
        return new ResponseEntity<>(userRepository.findById(id), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity createAccount(@RequestBody User user){
        userRepository.save(user);
        return new ResponseEntity<>(user, HttpStatus.CREATED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Optional<User>> deleteAccount(@PathVariable Long id){
        userRepository.deleteById(id);
        return new ResponseEntity(userRepository.findAll(), HttpStatus.OK);
    }
}