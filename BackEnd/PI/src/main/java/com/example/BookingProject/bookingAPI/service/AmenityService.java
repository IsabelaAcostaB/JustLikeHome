package com.example.BookingProject.bookingAPI.service;

import com.example.BookingProject.bookingAPI.persistence.model.Amenity;

import java.util.List;
import java.util.Optional;

public interface AmenityService {

    String saveAmenity(Amenity amenity);

    Optional<Amenity> findByTitle(String title);

    Amenity getAmenityById(Long id);

    List<Amenity> getAllAmenities();

    String deleteAmenity(Long id);

    Amenity updateAmenity(Amenity amenity);
}
