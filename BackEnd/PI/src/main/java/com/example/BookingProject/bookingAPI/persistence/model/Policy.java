package com.example.BookingProject.bookingAPI.persistence.model;

import lombok.*;
import javax.persistence.*;
import java.util.List;

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

    @Column(name = "rules")
    private String rules;

    @Column(name = "health_safety")
    private String health_safety;

    @Column(name = "cancellation_policy")
    private String cancellation_policy;

    /*@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "policy_id")
    private List<Product> products;*/

}
