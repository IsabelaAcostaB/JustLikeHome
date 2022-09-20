package com.example.BookingProject.bookingAPI.service.impl;


import com.example.BookingProject.bookingAPI.exception.ResourceNotFoundException;
import com.example.BookingProject.bookingAPI.persistence.model.Product;
import com.example.BookingProject.bookingAPI.persistence.repository.ProductRepository;
import com.example.BookingProject.bookingAPI.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;


    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }


    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).get();
    }

    @Override
    public List<Product> getAllProducts() {
        List<Product> products = productRepository.findAll();
        Collections.shuffle(products, new Random());
        return products;
    }
    @Override
    public Optional<Product> findByProductTitle(String title) {
        return productRepository.findByTitle(title);
    }

    @Override
    public Product updateProduct(Product product) {
        Optional<Product> productOptional = this.productRepository.findById(product.getId());
        if (productOptional.isPresent()) {
            Product existingProduct = productOptional.get();
            existingProduct.setId(product.getId());
            existingProduct.setTitle(product.getTitle());
            existingProduct.setCategory(product.getCategory());
            existingProduct.setImages(product.getImages());
            existingProduct.setDescription_title(product.getDescription_title());
            existingProduct.setDescription(product.getDescription());
            existingProduct.setAmenities(product.getAmenities());
            existingProduct.setPolicy(product.getPolicy());
            existingProduct.setCity(product.getCity());
            return productRepository.save(existingProduct);
        } else {
            throw new ResourceNotFoundException("Record not found with id: " + product.getId());
        }


    }


}


