package com.codeclan.example.bothies.components;

import com.codeclan.example.bothies.models.Review;
import com.codeclan.example.bothies.repositories.ReviewRepository;
import org.apache.tomcat.jni.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {


    @Autowired
    ReviewRepository reviewRepository;


    @Override
    public void run(ApplicationArguments args) throws Exception {


        Review review1 = new Review("good", 5);
        reviewRepository.save(review1);
    }
}




