package com.example.BookingProject.bookingAPI.controller;
import com.example.BookingProject.bookingAPI.persistence.model.City;
import com.example.BookingProject.bookingAPI.persistence.model.Product;
import com.example.BookingProject.bookingAPI.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/city")
public class CityController {

    @Autowired
    private CityService cityService;

    @PostMapping
    public ResponseEntity addCity(@RequestBody City city){

        if (cityService.findByName(city.getName()).isPresent()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(cityService.saveCity(city), HttpStatus.CREATED);
    }


    @PostMapping("/addMany")
    public ResponseEntity<?> addCities(@RequestBody List<City> cities) {
        return new ResponseEntity<>(cityService.saveAllCities(cities), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> findAllCities() {
        return new ResponseEntity<>(cityService.getAllCities(),HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<?> findCityByName(@PathVariable String name) {
        return new ResponseEntity<>(cityService.findByName(name), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findCityById(@PathVariable Long id) {
        return new ResponseEntity<>(cityService.getCityById(id), HttpStatus.OK);
    }

    @PutMapping()
    public ResponseEntity<?> updateCity(@RequestBody City city) {
        return new ResponseEntity<>(cityService.updateCity(city), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public String deleteCity(@PathVariable Long id){
        return cityService.deleteCity(id);
    }

}
