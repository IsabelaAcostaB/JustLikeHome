package com.example.BookingProject.bookingAPI.service;

import com.example.BookingProject.bookingAPI.persistence.model.Role;
import com.example.BookingProject.bookingAPI.persistence.model.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Service
public interface UserService {
    User saveUser(User user);

    Optional<User> findByUserEmail(String email);

    @Transactional
        //require when executing an update or delete query
    void changeRole(Role newRole, String username);

    @Transactional
    String deleteUser(Long id);

    User getUserById(Long id);

    List<User> getAllUsers();
}
