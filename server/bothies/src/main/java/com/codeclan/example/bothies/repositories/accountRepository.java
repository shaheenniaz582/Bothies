package com.codeclan.example.bothies.repositories;

import com.codeclan.example.bothies.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface accountRepository extends JpaRepository<Account, Long> {
}
