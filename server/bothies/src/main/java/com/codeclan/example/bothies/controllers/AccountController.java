package com.codeclan.example.bothies.controllers;

import com.codeclan.example.bothies.models.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping(value="/accounts")
public class AccountController {
    @Autowired
    com.codeclan.example.bothies.repositories.accountRepository accountRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Account>> getAccount(@PathVariable Long id){
        return new ResponseEntity<>(accountRepository.findById(id), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity createAccount(@RequestBody Account account){
        accountRepository.save(account);
        return new ResponseEntity<>(account, HttpStatus.CREATED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Optional<Account>> deleteAccount(@PathVariable Long id){
        accountRepository.deleteById(id);
        return new ResponseEntity(accountRepository.findAll(), HttpStatus.OK);
    }
}