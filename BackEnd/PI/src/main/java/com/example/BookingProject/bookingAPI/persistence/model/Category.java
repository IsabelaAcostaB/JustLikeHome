package com.example.BookingProject.bookingAPI.persistence.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /*Hay que eliminar el campo de relación para eliminar la categoria*/
    @OneToMany(mappedBy = "category", cascade = CascadeType.MERGE)
    @JsonIgnore
    private Set<Product> products = new HashSet<>();


    @Column(name = "title", nullable = false, length = 100, unique = true)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "image_url", nullable = false)
    private String imageURL;

    @Column(name = "category_code", nullable = false, unique = true)
    private String code;

}
