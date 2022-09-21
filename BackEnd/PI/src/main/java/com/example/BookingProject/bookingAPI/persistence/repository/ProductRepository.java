package com.example.BookingProject.bookingAPI.persistence.repository;

import com.example.BookingProject.bookingAPI.persistence.model.Product;
import com.example.BookingProject.bookingAPI.persistence.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    Optional<Product> findByTitle(String title);

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

   @Query(value = "SELECT product.*, city_code\n" +
           "FROM product \n" +
           "INNER JOIN city ON product.city_id = city.id\n" +
           "WHERE product.id NOT IN \n" +
           "(\tSELECT reservation.product_id\n" +
           "    FROM reservation \n" +
           "    WHERE ((:checkInD) BETWEEN reservation.check_in and reservation.check_out) OR ((:checkOutD)  BETWEEN reservation.check_in and reservation.check_out) or ((:checkInD) > reservation.check_out) and ((:checkOutD) < reservation.check_in)\n" +
           "    group by product_id)\n" +
           "HAVING city_code = (:cityCode);", nativeQuery = true)
    List<Product> findByRangeOfDatesAndCity(@Param("checkInD") Date checkInD, @Param("checkOutD") Date checkOut, @Param("cityCode")String cityCode);



    // FIND BY RANGE OF DATES

   @Query(value = "SELECT product.*, city_code\n" +
           "FROM product \n" +
           "INNER JOIN city ON product.city_id = city.id\n" +
           "WHERE product.id NOT IN \n" +
           "(\tSELECT reservation.product_id\n" +
           "    FROM reservation \n" +
           "    WHERE ((:checkInD) BETWEEN reservation.check_in and reservation.check_out) OR ((:checkOutD)  BETWEEN reservation.check_in and reservation.check_out) or ((:checkInD) > reservation.check_out) and ((:checkOutD) < reservation.check_in)\n" +
           "    group by product_id)",  nativeQuery = true)
    List<Product> findByRangeOfDates(@Param("checkInD") Date checkInD, @Param("checkOutD") Date checkOut);

}
