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

   /* @Query(value = "SELECT distinct a.id, a.check_in, a.check_out, a.city\n" +
            "FROM (\n" +
            "\tselect \n" +
            "\tpro.id,check_in, check_out,\n" +
            "\tcity.name as city, city_code \n" +
            "\tfrom PI_GRUPO6.product as pro\n" +
            "\t Join PI_GRUPO6.city as city on pro.city_id = city.id\n" +
            "\t Join PI_GRUPO6.reservation as reser on pro.reservation_id = reser.id\n" +
            "     ) as a  \n" +
            "where  a.check_in not between (:checkInD) and (:checkOutD)  and a.check_out not between (:checkInD) and (:checkOutD) and a.city_code = (:cityCode);", nativeQuery = true)
    List<Product> findByRangeOfDatesAndCity(@Param("checkInD") Date checkInD, @Param("checkOutD") Date checkOut, @Param("cityCode")String cityCode);
*/
   @Query(value = "SELECT a.availability, a.description, a.description_title, a.title, a.category_id, a.city_id, a.policy_id, reservation_id, a.check_in, a.check_out, a.city_code \n" +
            "FROM (\n" +
            "\tselect \n" +
            "\tproduct.availability, product.description, product.description_title, product.title, product.category_id, product.city_id, product.policy_id, reservation.check_in, reservation.check_out, city.city_code \n" +
            "\tfrom product\n" +
            "\t Join city  on product.city_id = city.id\n" +
            "\t Join reservation on product.reservation_id = reservation.id\n" +
            "     ) as a \n" +
            "\t where  a.check_in not between (:checkInD) and (:checkOutD)  and a.check_out not between (:checkInD) and (:checkOutD) and a.city_code = (:cityCode)", nativeQuery = true)
    List<Product> findByRangeOfDatesAndCity(@Param("checkInD") Date checkInD, @Param("checkOutD") Date checkOut, @Param("cityCode")String cityCode);



    // FIND BY RANGE OF DATES

   /*@Query(value = "SELECT distinct a.availability, a.description, a.description_title, a.title, a.category_id, a.city_id, a.policy_id, reservation_id \n" +
            "FROM (SELECT \n" +
            "\tproduct.availability, product.description, product.description_title, product.title, product.category_id, product.city_id, product.policy_id, reservation_id, reservation.check_in, reservation.check_out \n" +
            "\tFROM product\n" +
            "\t JOIN city  ON product.city_id = city.id\n" +
            "\t JOIN reservation ON product.reservation_id = reservation.id\n" +
            "     ) as a \n" +
            "\tWHERE  a.check_in NOT BETWEEN :checkInD and :checkOutD  AND a.check_out NOT BETWEEN :checkInD AND :checkOutD", nativeQuery = true)
    List<Product> findByRangeOfDates(@Param("checkInD") Date checkInD, @Param("checkOutD") Date checkOut);*/

}
