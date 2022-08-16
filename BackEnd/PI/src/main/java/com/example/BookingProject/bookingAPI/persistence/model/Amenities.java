package com.example.BookingProject.bookingAPI.persistence.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "amenities")
public class Amenities {

    @Id
    @SequenceGenerator(name="amenities_sequence", sequenceName = "amenities_sequence", allocationSize=1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "amenities_sequence")
    private Long id;

    @Column(name="title")
    private String title;
}
