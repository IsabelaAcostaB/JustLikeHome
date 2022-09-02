package com.example.BookingProject.bookingAPI.exception;

public class BadRequestException extends Exception {
    public BadRequestException(String message) {
        super(message);
    }
}