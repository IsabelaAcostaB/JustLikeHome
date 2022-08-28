package com.example.BookingProject.bookingAPI.controller;

import com.example.BookingProject.bookingAPI.persistence.model.Image;
import com.example.BookingProject.bookingAPI.persistence.repository.ImageRepository;
import com.example.BookingProject.bookingAPI.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/image")
public class ImageController {

    @Autowired
    private ImageService imageService;


    @PostMapping
    public ResponseEntity<Image> addImage(@RequestBody Image image) {
        return new ResponseEntity<>(imageService.saveImage(image), HttpStatus.CREATED);
    }

    @PostMapping("/addMany")
    public ResponseEntity<?> addImages(@RequestBody List<Image> images) {
        return new ResponseEntity<>(imageService.saveImages(images), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> findAllImages() {
        return new ResponseEntity<>(imageService.getAllImages(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findImageById(@PathVariable Long id) {
        return new ResponseEntity<>(imageService.getImageById(id), HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<?> updateImage(@RequestBody Image image) {

        return new ResponseEntity<>(imageService.updateImage(image), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public String deleteImage(@PathVariable Long id){
        return imageService.deleteImage(id);
    }

}
