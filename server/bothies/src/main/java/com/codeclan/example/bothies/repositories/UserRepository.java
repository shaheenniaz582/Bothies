package com.codeclan.example.bothies.repositories;

import com.codeclan.example.bothies.models.Review;
import com.codeclan.example.bothies.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
