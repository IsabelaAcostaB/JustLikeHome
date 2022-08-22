package com.example.BookingProject.bookingAPI.service;

import com.example.BookingProject.bookingAPI.persistence.model.Policy;

import java.util.List;

public interface PolicyService {
    Policy savePolicy(Policy policy);

    List<Policy> savePolicies(List<Policy> policies);

    Policy getPolicyById(Long id);

    List<Policy> getAllPolicies();

    String deletePolicy(Long id);

    Policy updatePolicy(Policy policy);
}
