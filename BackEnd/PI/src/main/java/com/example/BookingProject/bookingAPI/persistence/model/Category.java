package com.example.BookingProject.bookingAPI.persistence.model;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "Category_tbl")
public class Category {
    @Id
    @SequenceGenerator(name="category_sequence", sequenceName = "category_sequence", allocationSize=1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "category_sequence")
    private Long id;

    @Column(name = "title", unique = true, nullable = false, length = 100)
    private String title;

    @Column(name = "description", unique = true, nullable = false)
    private String description;

    @Column(name = "image_url", unique = true, nullable = false)
    private String imageURL;

}
