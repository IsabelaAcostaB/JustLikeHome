package com.example.BookingProject.bookingAPI.persistence.repository;

import com.example.BookingProject.bookingAPI.persistence.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    // FIND BY CITY TITLE, ID AND CODE

    @Query(value = "SELECT product.*, city.name FROM product INNER JOIN city ON product.city_id = city.id WHERE city.name = (:name)", nativeQuery = true)
    List<Product> findByCityName(@Param("name") String city);

    @Query(value = " SELECT product.*, city.id FROM product INNER JOIN city ON product.city_id = city.id WHERE city.id =(:id)", nativeQuery = true)
    List<Product> findByCityId(@Param("id") Long id);

    @Query(value = " SELECT product.*, city.city_code FROM product INNER JOIN city ON product.city_id = city.id WHERE city.city_code =(:code)", nativeQuery = true)
    List<Product> findByCityCode(@Param("code") String code);


    // FIND BY CATEGORY TITLE, ID AND CODE

    @Query(value = "SELECT product.*, category.title FROM product INNER JOIN category ON product.category_id = category.id WHERE category.title = (:category)", nativeQuery = true)
    List<Product> findByCategoryTitle(@Param("category") String category);

    @Query(value = "SELECT product.*, category.id FROM product INNER JOIN category ON product.category_id = category.id WHERE category.id = (:id);", nativeQuery = true)
    List<Product> findByCategoryId(@Param("id") Long id);

    @Query(value = "SELECT product.*, category.category_code FROM product INNER JOIN category ON product.category_id = category.id WHERE category.category_code =(:code)", nativeQuery = true)
    List<Product> findByCategoryCode(@Param("code") String code);


    // FIND BY RANGE OF DATES AND CITY

    @Query(value = "SELECT distinct a.id, a.check_in, a.check_out, a.city FROM (select pro.id, check_in,check_out,\n" +
            "\t city.name as city city_code from PI_GRUPO6.product as pro Join PI_GRUPO6.city as city on pro.city_id = city.id\n" +
            "\t Join PI_GRUPO6.reservation as reser on pro.reservation_id = reser.id\n" +
            "\t) as a where a.check_in between (:checkInD) and (:checkOutD)  and a.check_out between (:checkInD) and (:checkOutD)  and a.city_code = (:cityCode);", nativeQuery = true)
    List<Product> findByRangeOfDatesAndCity(@Param("checkInD") Date checkInD, @Param("checkOutD") Date checkOut, @Param("cityCode")String cityCode);


}
