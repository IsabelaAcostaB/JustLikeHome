package com.example.BookingProject.bookingAPI.persistence.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashMap;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "product")
public class Product {

    @Id
    @SequenceGenerator(name="product_sequence", sequenceName = "product_sequence", allocationSize=1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "product_sequence")
    private Long id;

    @Column(name="title")
    private String title;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
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

//    @ManyToMany(fetch = FetchType.LAZY)
//    @JoinColumn(name = "amenities_id")
//    private String amenities;

    @Column(name="availability")
    private Boolean availability;

    @Column(name="policies")
    private String policies;

}
