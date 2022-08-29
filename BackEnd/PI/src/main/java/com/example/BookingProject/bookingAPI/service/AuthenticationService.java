package com.example.BookingProject.bookingAPI.service;

import com.example.BookingProject.bookingAPI.persistence.model.User;


public interface AuthenticationService {
    User signInAndReturnJWT(User signInRequest);
}
