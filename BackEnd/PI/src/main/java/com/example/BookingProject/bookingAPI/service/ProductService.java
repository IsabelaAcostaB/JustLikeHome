package com.example.BookingProject.bookingAPI.service;

import com.example.BookingProject.bookingAPI.persistence.model.Product;

import java.util.List;


public interface ProductService {

    Product saveProduct(Product product);

    Product getProductById(Long id);

    List<Product> getAllProducts();


    Product updateProduct(Product product);
}
