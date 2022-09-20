package com.example.BookingProject.bookingAPI.controller;

import com.example.BookingProject.bookingAPI.persistence.model.Amenity;
import com.example.BookingProject.bookingAPI.persistence.model.Product;
import com.example.BookingProject.bookingAPI.service.AmenityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/amenity")
public class AmenityController {

    @Autowired
    private AmenityService amenityService;

    @PostMapping
    public ResponseEntity<?> addAmenity(@RequestBody Amenity amenity){

        if (amenityService.findByTitle(amenity.getTitle()).isPresent()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(amenityService.saveAmenity(amenity), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> findAllAmenities() {
        return new ResponseEntity<>(amenityService.getAllAmenities(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findAmenityById(@PathVariable Long id) {
        return new ResponseEntity<>(amenityService.getAmenityById(id), HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<?> updateAmenity(@RequestBody Amenity amenity) {
        return new ResponseEntity<>(amenityService.updateAmenity(amenity), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public String deleteAmenity(@PathVariable Long id){
        return amenityService.deleteAmenity(id);
    }

}
