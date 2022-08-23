package com.example.BookingProject.bookingAPI.controller;


import com.example.BookingProject.bookingAPI.persistence.model.Policy;
import com.example.BookingProject.bookingAPI.service.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/policy")
public class PolicyController {

    @Autowired
    private PolicyService policyService;

    @PostMapping
    public ResponseEntity<Policy> addPolicy(@RequestBody Policy policy) {
        return new ResponseEntity<>(policyService.savePolicy(policy), HttpStatus.CREATED);
    }

    @PostMapping("/addMany")
    public ResponseEntity<?> addPolicies(@RequestBody List<Policy> policies) {
        return new ResponseEntity<>(policyService.savePolicies(policies), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> findAllPolicies() {
        return new ResponseEntity<>(policyService.getAllPolicies(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findPolicyById(@PathVariable Long id) {
        return new ResponseEntity<>(policyService.getPolicyById(id), HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<?> updatePolicy(@RequestBody Policy policy) {

        return new ResponseEntity<>(policyService.updatePolicy(policy), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public String deletePolicy(@PathVariable Long id){
        return policyService.deletePolicy(id);
    }
}
