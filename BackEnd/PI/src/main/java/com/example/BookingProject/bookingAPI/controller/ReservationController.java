package com.example.BookingProject.bookingAPI.controller;

import com.example.BookingProject.bookingAPI.persistence.model.Image;
import com.example.BookingProject.bookingAPI.persistence.model.Reservation;
import com.example.BookingProject.bookingAPI.persistence.repository.ReservationRepository;
import com.example.BookingProject.bookingAPI.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("reservation")
public class ReservationController {

    @Autowired
    ReservationService reservationService;


    @PostMapping
    public ResponseEntity<Reservation> addReservation(@RequestBody Reservation reservation){
        return new ResponseEntity<>(reservationService.createReservation(reservation), HttpStatus.CREATED);
    }

    @PostMapping("/addMany")
    public ResponseEntity<?> addManyReservations(@RequestBody List<Reservation> reservations){
        return new ResponseEntity<>(reservationService.createManyReservations(reservations), HttpStatus.CREATED);
    }

    @GetMapping()
    public ResponseEntity<?> findAllReservations(){
        return new ResponseEntity<>(reservationService.getAllReservations(), HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> findReservationById(@PathVariable Long id){
        return new ResponseEntity<>(reservationService.getReservationById(id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public String deleteReservations(@PathVariable Long id){
        return reservationService.deleteReservation(id);
    }

    @PutMapping()
    public ResponseEntity<?> updateReservation(@RequestBody Reservation reservation) {
        return new ResponseEntity<>(reservationService.updateReservation(reservation), HttpStatus.OK);
    }



}
