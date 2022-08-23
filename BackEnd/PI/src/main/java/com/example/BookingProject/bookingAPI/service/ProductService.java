package com.example.BookingProject.bookingAPI.service;

import com.example.BookingProject.bookingAPI.persistence.model.Product;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ProductService {

    Product saveProduct(Product product);

    Product getById(Long id);

    List<Product> getAllProducts();


   /* @Query("{CALL get_product_by_city_id(:id)}")
    List<Product> findByCityId(@Param("id") Long id);

    @Query("{CALL get_product_by_city_name(:city)}")
    List<Product> findByCityName(@Param("city") String city);

    @Query("{CALL get_product_by_category_id(:id)}")
    List<Product> findByCategoryId(Long id);

    @Query("{CALL get_product_by_category(:city)}")
    List<Product> findByCategoryTitle(String category);*/



}
