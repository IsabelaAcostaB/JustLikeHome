package com.example.BookingProject.bookingAPI.service;

import com.example.BookingProject.bookingAPI.persistence.model.Product;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ProductService {

    Product saveProduct(Product product);

    Product getById(Long id);

    List<Product> getAllProducts();

    List<Product> findByCityName(String city);

    List<Product> findByCategoryTitle(String category);
}
