package com.example.BookingProject.bookingAPI.service;

import com.example.BookingProject.bookingAPI.persistence.model.Image;

import java.util.List;

public interface ImageService {
    Image saveImage(Image image);

    List<Image> saveImages(List<Image> images);

    Image getImageById(Long id);

    List<Image> getAllImages();

    String deleteImage(Long id);

    Image updateImage(Image image);
}
