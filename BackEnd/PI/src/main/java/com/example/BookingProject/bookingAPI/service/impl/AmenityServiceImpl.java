package com.example.BookingProject.bookingAPI.service.impl;

import com.example.BookingProject.bookingAPI.exception.ResourceNotFoundException;
import com.example.BookingProject.bookingAPI.persistence.model.Amenity;
import com.example.BookingProject.bookingAPI.persistence.model.City;
import com.example.BookingProject.bookingAPI.persistence.repository.AmenityRepository;
import com.example.BookingProject.bookingAPI.service.AmenityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AmenityServiceImpl implements AmenityService {

    @Autowired
    AmenityRepository amenityRepository;

    @Override
    public String saveAmenity(Amenity amenity) {
        amenityRepository.save(amenity);
        Long amenity_id = amenity.getId();
        String amenity_name = amenity.getTitle();
        return "Amenity : "+ amenity_name + " with id :" + amenity_id +" , was successfully created." ;
    }

    @Override
    public Amenity getAmenityById(Long id) {
        if(amenityRepository.existsById(id)){
            Amenity amenity = amenityRepository.findById(id).get();
            return amenity;
        }
        return null;
    }

    @Override
    public List<Amenity> getAllAmenities() {
        List<Amenity> amenities = amenityRepository.findAll();
        return amenities;
    }

    @Override
    public String deleteAmenity(Long id) {
        if(amenityRepository.findById(id).isPresent()){
            amenityRepository.deleteById(id);
            return "Amenity with id:" + id + " has been successfully deleted";
        } else
            throw new ResourceNotFoundException("Amenity with id: " + id + " doesn't exist");
    }

    @Override
    public Amenity updateAmenity(Amenity amenity) {
        Optional<Amenity> categoryOptional = this.amenityRepository.findById(amenity.getId());
        if (categoryOptional.isPresent()) {
            Amenity existingAmenity = categoryOptional.get();
            existingAmenity.setTitle(amenity.getTitle());
            existingAmenity.setIcon(amenity.getIcon());
            return amenityRepository.save(existingAmenity);
        } else {
            throw new ResourceNotFoundException("Record not found with id: " + amenity.getId());
        }
    }
}
