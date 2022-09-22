package com.example.BookingProject.bookingAPI.persistence.repository;

import com.example.BookingProject.bookingAPI.persistence.model.Product;
import com.example.BookingProject.bookingAPI.persistence.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    @Query(value = " SELECT reservation.* FROM reservation WHERE reservation.product_id =(:id)", nativeQuery = true)
    List<Reservation> getReservationsByProductId(@Param("id") Long id);

    @Query(value = " SELECT product.* , reservation.* \n" +
            "FROM reservation  \n" +
            "JOIN product ON reservation.product_id = product.id  \n" +
            "WHERE reservation.user_id = (:id);", nativeQuery = true)
    List<Reservation> getReservationsByUserId(@Param("id") Long id);
}
