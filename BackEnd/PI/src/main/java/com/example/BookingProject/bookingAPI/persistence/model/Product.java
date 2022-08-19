package com.example.BookingProject.bookingAPI.persistence.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="title")
    private String title;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "category_id", referencedColumnName = "id", nullable = false)
    private Category category;


    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(
            name = "product_id", referencedColumnName = "id"
    )
    private Set<Image> images = new HashSet<>();

    @Column(name="description_title")
    private String description_title;

    @Column(name="description")
    private String description;

    @ManyToMany
    @JoinTable(
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "amenities_id")
    )
    @JsonIgnore
    private Set<Amenity> amenities = new HashSet<>();

    @Column(name="availability")
    private Boolean availability;


    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(
            name = "product_id", referencedColumnName = "id"
    )
    private Set<Policy> policies = new HashSet<>();

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(
            name = "city_id",
            referencedColumnName = "id", nullable = false
    )
    private City city;



}
