package com.example.BookingProject.bookingAPI.persistence.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "reservation")
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="checkInHour")
    private String checkIn_hour;

    @Column(name="checkIn")
    private String checkIn;

    @Column(name="checkOut")
    private String checkOut;

//    @ManyToOne(cascade = CascadeType.MERGE)
//    @JoinColumn(
//            name = "product_id",
//            referencedColumnName = "id", nullable = false
//    )
//    private Product product;
}
