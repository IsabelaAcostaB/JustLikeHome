package com.example.BookingProject.bookingAPI.persistence.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "Category_tbl")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Product> products = new HashSet<>();


    @Column(name = "title", nullable = false, length = 100)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "image_url", unique = true, nullable = false)
    private String imageURL;

}
