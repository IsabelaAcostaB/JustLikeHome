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

    @Column(name = "rules")
    private String rules;

    @Column(name = "health_safety")
    private String health_safety;

    @Column(name = "cancellation_policy")
    private String cancellation_policy;

    /*@JsonBackReference
    @JsonIgnoreProperties({"handler", "hibernateLazyInitializer"})*/
   /* esta es para la clase hija
    @JsonManagedReference*/
    //@JsonBackReference
   /* @JsonIgnoreProperties(value = {"hibernateLazyInitializer", "handler"}, allowSetters = true)*/

}
