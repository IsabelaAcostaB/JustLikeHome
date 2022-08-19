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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @ElementCollection
    private ArrayList<String> rules = new ArrayList<>();

    @Column
    @ElementCollection
    private ArrayList<String> health_safety = new ArrayList<>();

    @Column
    private String cancellation_policy;



}
