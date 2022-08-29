package com.example.BookingProject.bookingAPI.service;

import com.example.BookingProject.bookingAPI.persistence.model.Reservation;

import java.util.List;

public interface ReservationService {

    Reservation createReservation (Reservation reservation);

    List<Reservation> createManyReservations(List<Reservation> reservations);

    Reservation getReservationById(Long id);

    List<Reservation> getAllReservations();

    String deleteReservation(Long id);

    Reservation updateReservation(Reservation reservation);

}
