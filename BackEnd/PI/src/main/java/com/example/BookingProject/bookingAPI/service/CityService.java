package com.example.BookingProject.bookingAPI.service;

import com.example.BookingProject.bookingAPI.persistence.model.Category;
import com.example.BookingProject.bookingAPI.persistence.model.City;

import java.util.List;

public interface CityService {

    String saveCity(City city);

    List<City> saveAllCities(List<City> cities);

    City findByName(String title);

    City getCityById(Long id);

    List<City> getAllCities();

    String deleteCity(Long id);

    City updateCity(City city);
}
