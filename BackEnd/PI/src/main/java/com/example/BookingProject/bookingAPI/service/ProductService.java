package com.example.BookingProject.bookingAPI.service;

import com.example.BookingProject.bookingAPI.persistence.model.Product;
import com.example.BookingProject.bookingAPI.persistence.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface ProductService {

    Product saveProduct(Product product);



    Product getProductById(Long id);

    List<Product> getAllProducts();

    Optional<Product> findByProductTitle(String title);

    Product updateProduct(Product product);
}
