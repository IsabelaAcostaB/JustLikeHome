package com.example.BookingProject.bookingAPI.persistence.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.loader.collection.OneToManyJoinWalker;

import javax.persistence.*;
import java.util.HashMap;
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private Category category;

    @Column(name="location")
    private String location;

    @Column(name="images")
    private String images;

    @Column(name="description_title")
    private String description_title;

    @Column(name="description")
    private String description;

    @ManyToMany(fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Amenities> amenities = new HashSet<>();

    @Column(name="availability")
    private Boolean availability;

    @Column(name="policies")
    private String policies;

}
