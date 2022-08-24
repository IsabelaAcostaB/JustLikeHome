package com.example.BookingProject.bookingAPI.persistence.repository;

import com.example.BookingProject.bookingAPI.persistence.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;

import org.springframework.stereotype.Repository;

import javax.persistence.SqlResultSetMapping;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // FIND BY CITY TITLE, ID AND CODE

    @Query(value = "SELECT product.*, city.name FROM product INNER JOIN city ON product.city_id = city.id WHERE city.name = (:name)", nativeQuery = true)
    List<Product> findByCityName(@Param("name") String city);

    @Query(value = " SELECT product.*, category.title FROM product INNER JOIN category ON product.category_id = category.id WHERE city.id =(:id)", nativeQuery = true)
    List<Product> findByCityId(@Param("id") Long id);

    @Query(value = " SELECT product.*, category.title FROM product INNER JOIN category ON product.category_id = category.id WHERE city.code =(:code)", nativeQuery = true)
    List<Product> findByCityCode(@Param("code") String code);


    // FIND BY CATEGORY TITLE, ID AND CODE

    @Query(value = "SELECT product.*, category.title FROM product INNER JOIN category ON product.category_id = category.id WHERE category.title = (:category)", nativeQuery = true)
    List<Product> findByCategoryTitle(@Param("category") String category);

    @Query(value = "SELECT product.*, category.title FROM product INNER JOIN category ON product.category_id = category.id WHERE category.id = (:id);", nativeQuery = true)
    List<Product> findByCategoryId(@Param("id") Long id);

    @Query(value = "SELECT product.*, category.title, category.code FROM product INNER JOIN category ON product.category_id = category.id WHERE category.code =(:code)", nativeQuery = true)
    List<Product> findByCategoryCode(@Param("code") String code);


}
