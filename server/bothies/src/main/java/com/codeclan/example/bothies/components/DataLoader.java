package com.codeclan.example.bothies.components;

import com.codeclan.example.bothies.models.Review;
import com.codeclan.example.bothies.models.User;
import com.codeclan.example.bothies.repositories.ReviewRepository;
import com.codeclan.example.bothies.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {


    @Autowired
    ReviewRepository reviewRepository;
    @Autowired
    UserRepository userRepository;

    @Override
    public void run(ApplicationArguments args){
        User user1= new User("Harley", "harleybramwell97@gamil.com", "password");
        userRepository.save(user1);

        Review review1 = new Review("good", 5, 7051953);
        reviewRepository.save(review1);

    }
}




