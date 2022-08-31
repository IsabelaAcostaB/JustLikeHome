package com.example.BookingProject.bookingAPI.security.jwt;

import com.example.BookingProject.bookingAPI.security.UserPrinciple;
import org.springframework.security.core.Authentication;


import javax.servlet.http.HttpServletRequest;

public interface JwtProvider {

    String generateToken(UserPrinciple auth);


    Authentication getAuthentication(HttpServletRequest request);

    boolean isTokenValid(HttpServletRequest request);
}
