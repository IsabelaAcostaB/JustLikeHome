package com.example.BookingProject.bookingAPI.persistence.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "amenities")
public class Amenities {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "amenities_sequence")
    private Long id;

    @Column(name="title")
    private String title;

    @Column(name="icon")
    private String icon;

    @ManyToMany(fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Product> products = new HashSet<>();
}
