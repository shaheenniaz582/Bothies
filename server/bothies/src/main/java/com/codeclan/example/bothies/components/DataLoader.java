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
<<<<<<< HEAD

=======
>>>>>>> feature/reviewbox


<<<<<<< HEAD
    public void run(ApplicationArguments args){
        Review review1 = new Review(" .............",5);
        reviewRepository.save(review1);
        Review review2 = new Review(" ......Excellent.......",4);
        reviewRepository.save(review2);
        Review review3 = new Review(" .....Good........",3);
        reviewRepository.save(review3);
        Review review4 = new Review(" .....ok........",2);
        reviewRepository.save(review4);
=======
        Review review1 = new Review("good", 5);
        reviewRepository.save(review1);
>>>>>>> 30e4b231bc9d0cbc46f67bf6b6f6117ecf81dc6f
    }
}




