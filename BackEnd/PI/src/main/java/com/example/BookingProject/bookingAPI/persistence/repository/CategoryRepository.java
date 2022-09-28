package com.example.BookingProject.bookingAPI.persistence.repository;

import com.example.BookingProject.bookingAPI.persistence.model.Category;
import com.example.BookingProject.bookingAPI.persistence.model.City;
import com.example.BookingProject.bookingAPI.persistence.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    Optional<Category> findByTitle(String title);

    @Query(value = " SELECT count(*) \n" +
            "FROM product  \n" +
            "WHERE category_id = (:id);", nativeQuery = true)
    Integer getQuantityInCategoryById(@Param("id") Long id);
}
