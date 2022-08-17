package com.example.BookingProject.bookingAPI.persistence.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "policy")
public class Policy {

    @Id
    @SequenceGenerator(name="image_sequence", sequenceName = "image_sequence", allocationSize=1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "image_sequence")
    private Long id;

    @Column
    private ArrayList<String> rules = new ArrayList<>();

    @Column
    private ArrayList<String> health_safety = new ArrayList<>();

    @Column
    private String cancellation_policy;

    @OneToMany(fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Product> products = new HashSet<>();

}
