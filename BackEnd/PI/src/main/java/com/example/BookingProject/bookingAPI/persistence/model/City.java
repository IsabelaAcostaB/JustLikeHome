package com.example.BookingProject.bookingAPI.persistence.model;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder

@Table(name = "city")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false, length = 100, unique = true)
    private String name;

    @Column(name = "country", nullable = false)
    private String country;

    @Column(name = "city_code", nullable = false, unique = true)
    private String code;



}
