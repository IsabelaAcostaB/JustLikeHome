package com.example.BookingProject.bookingAPI.persistence.repository;

import com.example.BookingProject.bookingAPI.persistence.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByCity_Name(String city);

    List<Product> findByCategory_Title(String category);

}
