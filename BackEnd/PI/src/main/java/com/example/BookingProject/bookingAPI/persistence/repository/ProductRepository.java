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


    @Procedure(procedureName = "{CALL get_product_by_city_id(:id)}")
    List<Product> findByCityId(@Param("id") Long id);

    @Procedure(procedureName = "{CALL get_product_by_city_name(:city)}")
    List<Product> findByCityName(@Param("city") String city);

    @Procedure(procedureName = "{CALL get_product_by_category_id(:id)}")
    List<Product> findByCategoryId(@Param("id") Long id);

    @Procedure(procedureName = "{CALL get_product_by_category(:city)}")
    List<Product> findByCategoryTitle(@Param("city") String category);


}
