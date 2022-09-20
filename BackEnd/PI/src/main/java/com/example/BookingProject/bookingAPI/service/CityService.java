package com.example.BookingProject.bookingAPI.service;

import com.example.BookingProject.bookingAPI.persistence.model.City;

import java.util.List;
import java.util.Optional;

public interface CityService {

    String saveCity(City city);

    List<City> saveAllCities(List<City> cities);


    Optional<City> findByName(String name);

    City getCityById(Long id);

    List<City> getAllCities();

    String deleteCity(Long id);

    City updateCity(City city);
}
