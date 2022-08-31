package com.example.BookingProject.bookingAPI.service.impl;

import com.example.BookingProject.bookingAPI.exception.ResourceNotFoundException;
import com.example.BookingProject.bookingAPI.persistence.model.Role;
import com.example.BookingProject.bookingAPI.persistence.model.User;
import com.example.BookingProject.bookingAPI.persistence.repository.UserRepository;
import com.example.BookingProject.bookingAPI.service.UserService;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    public UserServiceImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.USER);
        user.setCreateTime(LocalDateTime.now());
        return userRepository.save(user);
    }



    @Override
    public Optional<User> findByUserEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    @Transactional //require when executing an update or delete query
    public void changeRole(Role newRole, String username) {
        userRepository.updateUserRole(username, newRole);
    }

    @Override
    @Transactional
    public String deleteUser(Long id){
        if(userRepository.findById(id).isPresent()){
            userRepository.deleteById(id);
            return "User with id: " + id + " has been successfully deleted";
        } else
            throw new ResourceNotFoundException("User with id: " + id + " doesn't exist");

    }
    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id).get();
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }


}
