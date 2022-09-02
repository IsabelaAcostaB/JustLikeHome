package com.example.BookingProject.bookingAPI.service.impl;

import com.example.BookingProject.bookingAPI.exception.ResourceNotFoundException;
import com.example.BookingProject.bookingAPI.persistence.model.Policy;
import com.example.BookingProject.bookingAPI.persistence.repository.PolicyRepository;
import com.example.BookingProject.bookingAPI.service.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PolicyServiceImpl implements PolicyService {

    @Autowired
    PolicyRepository policyRepository;

    @Override
    public Policy savePolicy(Policy policy) {
        return  policyRepository.save(policy);
    }

    @Override
    public List<Policy> savePolicies(List<Policy> policies) {
        return policyRepository.saveAll(policies);
    }

    @Override
    public Policy getPolicyById(Long id) {
        return policyRepository.findById(id).get();
    }

    @Override
    public List<Policy> getAllPolicies() {
        List<Policy> policies = policyRepository.findAll();
        return policies;
    }

    @Override
    public String deletePolicy(Long id) {

        if(policyRepository.findById(id).isPresent()){
            policyRepository.deleteById(id);
            return "Policy with id: " + id + " has been successfully deleted";
        } else
            throw new ResourceNotFoundException("Policy with id: " + id + " doesn't exist");
    }

    @Override
    public Policy updatePolicy (Policy policy) {
        Optional<Policy> policyOptional = this.policyRepository.findById(policy.getId());
        if (policyOptional.isPresent()) {
            Policy existingPolicy = policyOptional.get();
            existingPolicy.setId(policy.getId());
            existingPolicy.setCancellation_policy(policy.getCancellation_policy());
            existingPolicy.setHealth_safety(policy.getHealth_safety());
            existingPolicy.setRules(policy.getRules());
            return policyRepository.save(existingPolicy);
        } else {
            throw new ResourceNotFoundException("Record not found with id: " + policy.getId());
        }
    }




}
