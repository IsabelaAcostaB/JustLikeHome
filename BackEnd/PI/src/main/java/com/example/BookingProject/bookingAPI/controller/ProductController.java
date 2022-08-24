package com.example.BookingProject.bookingAPI.controller;

import com.example.BookingProject.bookingAPI.persistence.model.Product;
import com.example.BookingProject.bookingAPI.persistence.repository.ProductRepository;
import com.example.BookingProject.bookingAPI.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api")
public class ProductController {

    @Autowired
    ProductService productService;

    @Autowired
    ProductRepository productRepository;


    @PostMapping
    public ResponseEntity<?> addProduct(@RequestBody Product product){
        return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<?> findAllProducts() {
        return new ResponseEntity<>(productService.getAllProducts(),HttpStatus.OK);
    }

    @GetMapping("/product/{id}")
    public Product getById(@PathVariable Long id){
        return productService.getById(id);
    }


    /*     Encontrar por ciudad      */

    @GetMapping("/productCity/name/{city}")
    public List<Product> findByCityName (@PathVariable String city) {
        return productRepository.findByCityName(city);
    }

    @GetMapping("/productCity/id/{cityId}")
    public List<Product> findCityByCityId (@PathVariable Long id) {
        return productRepository.findByCityId(id);
    }

    @GetMapping("/productCity/id/{cityCode}")
    public List<Product> findProductByCityCode (@PathVariable String code) {
        return productRepository.findByCityCode(code);

    }
     /*       Encontrar por categoria       */

    @GetMapping("/productCategory/name/{category}")
    public List<Product> findProductByCategory (@PathVariable String category) {
        return productRepository.findByCategoryTitle(category);
    }

    @GetMapping("/productCategory/id/{categoryId}")
    public List<Product> findProductByCategoryId (@PathVariable Long id) {
        return productRepository.findByCategoryId(id);
    }

    @GetMapping("/productCategory/code/{categoryCode}")
    public List<Product> findProductByCategoryCode (@PathVariable String code) {
        return productRepository.findByCategoryCode(code);
    }

}
