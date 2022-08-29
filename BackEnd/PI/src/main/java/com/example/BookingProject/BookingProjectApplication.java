package com.example.BookingProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;

@SpringBootApplication(scanBasePackages = {
		"com.example.BookingProject.bookingAPI.service",
		"com.example.BookingProject.bookingAPI.service.impl",
		"com.example.BookingProject.bookingAPI.security",
		"com.example.BookingProject.bookingAPI.persistence.repository",
})


public class BookingProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookingProjectApplication.class, args);
	}

}
