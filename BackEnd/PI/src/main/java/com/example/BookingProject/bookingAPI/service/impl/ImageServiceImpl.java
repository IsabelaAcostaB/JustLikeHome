package com.example.BookingProject.bookingAPI.service.impl;

import com.example.BookingProject.bookingAPI.exception.ResourceNotFoundException;
import com.example.BookingProject.bookingAPI.persistence.model.Image;
import com.example.BookingProject.bookingAPI.persistence.repository.ImageRepository;
import com.example.BookingProject.bookingAPI.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Transactional
@Service
public class ImageServiceImpl implements ImageService {

    @Autowired
    ImageRepository imageRepository;

    @Override
    public Image saveImage(Image image) {
        return  imageRepository.save(image);
    }

    @Override
    public List<Image> saveImages(List<Image> images) {
        return imageRepository.saveAll(images);
    }

    @Override
    public Image getImageById(Long id) {
        return imageRepository.findById(id).get();
    }

    @Override
    public List<Image> getAllImages() {
        List<Image> images = imageRepository.findAll();
        return images;
    }

    @Override
    public String deleteImage(Long id) {

        if(imageRepository.findById(id).isPresent()){
            imageRepository.deleteById(id);
            return "Image with id: " + id + " has been successfully deleted";
        } else
            throw new ResourceNotFoundException("Image with id: " + id + " doesn't exist");
    }

    @Override
    public Image updateImage(Image image) {
        Optional<Image> imageOptional = this.imageRepository.findById(image.getId());
        if (imageOptional.isPresent()) {
            Image existingImage = imageOptional.get();
            existingImage.setId(image.getId());
            existingImage.setImageURL(image.getImageURL());
            existingImage.setTitle(image.getTitle());
            return imageRepository.save(existingImage);
        } else {
            throw new ResourceNotFoundException("Record not found with id: " + image.getId());
        }
    }
}
