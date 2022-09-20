package com.example.BookingProject.bookingAPI.service.impl;

import com.example.BookingProject.bookingAPI.exception.ResourceNotFoundException;
import com.example.BookingProject.bookingAPI.persistence.model.City;
import com.example.BookingProject.bookingAPI.persistence.repository.CityRepository;
import com.example.BookingProject.bookingAPI.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CityServiceImpl implements CityService {

    @Autowired
    CityRepository cityRepository;

    @Override
    public String saveCity(City city) {
        cityRepository.save(city);
        Long city_id = city.getId();
        String city_name = city.getName();
        return "City : "+ city_name+ " with id :" + city_id +" , was successfully created." ;
    }
    @Override
    public List<City> saveAllCities(List<City> cities) {
        return cityRepository.saveAll(cities);
    }

    @Override
    public  Optional<City> findByName (String name) {
        return cityRepository.findByName(name);
    }

    @Override
    public City getCityById(Long id) {
        if(cityRepository.existsById(id)){
            City city = cityRepository.findById(id).get();
            return city;
        }
        return null;
    }

    @Override
    public List<City> getAllCities() {
        List<City> cities = cityRepository.findAll();
        return cities;
    }

    @Override
    public String deleteCity(Long id) {
        if(cityRepository.findById(id).isPresent()){
            cityRepository.deleteById(id);
            return "City with id:" + id + " has been successfully deleted";
        } else
            throw new ResourceNotFoundException("City with id: " + id + " doesn't exist");
    }

    @Override
    public City updateCity(City city) {
        Optional<City> categoryOptional = this.cityRepository.findById(city.getId());
        if (categoryOptional.isPresent()) {
            City existingCity = categoryOptional.get();
            existingCity.setName(city.getName());
            existingCity.setCode(city.getCode());
            existingCity.setCountry(city.getCountry());
            return cityRepository.save(existingCity);
        } else {
            throw new ResourceNotFoundException("Record not found with id: " + city.getId());
        }
    }
}
