package com.example.BookingProject.bookingAPI.service.impl;


import com.example.BookingProject.bookingAPI.persistence.model.Product;
import com.example.BookingProject.bookingAPI.persistence.repository.ProductRepository;
import com.example.BookingProject.bookingAPI.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;


    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product getById(Long id) {
        if(productRepository.existsById(id)){
            Product product = productRepository.findById(id).get();
            return product;
        }
        return null;
    }

    @Override
    public List<Product> getAllProducts() {
        if(productRepository.findAll().size()==0){
            return null;
        }
        return productRepository.findAll();
    }
    @Override
    public List<Product> findByCityName(String city) {
        List<Product> productList = productRepository.findByCity_Name(city);
        return productList;
    }
    @Override
    public List<Product> findByCategoryTitle(String category) {
        List<Product> productList = productRepository.findByCategory_Title(category);
        return productList;
    }

}
