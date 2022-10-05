package com.example.BookingProject.bookingAPI.persistence.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;

import javax.persistence.*;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@ToString(exclude = {"user", "product"})

@Table(name = "reservation")
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id"
)
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="checkInHour")
    private String checkIn_hour;

    @Column(name="checkIn")
    private String checkIn;

    @Column(name="checkOut")
    private String checkOut;

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(
            name = "user_id",
            referencedColumnName = "id"
    )
    private User user;



    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(
            name = "product_id",
            referencedColumnName = "id", nullable = false
    )

    private Product product;
}
