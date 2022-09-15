package com.example.BookingProject.bookingAPI.service;

import com.example.BookingProject.bookingAPI.persistence.model.Amenity;

import java.util.List;

public interface AmenityService {

    String saveAmenity(Amenity amenity);

    Amenity getAmenityById(Long id);

    List<Amenity> getAllAmenities();

    String deleteAmenity(Long id);

    Amenity updateAmenity(Amenity amenity);
}
