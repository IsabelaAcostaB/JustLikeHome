package com.example.BookingProject.bookingAPI.service;

import com.example.BookingProject.bookingAPI.persistence.model.Category;


import java.util.List;
import java.util.Optional;


public interface CategoryService {
    Category saveCategory(Category category);

    List<Category> saveCategories(List<Category> categories);


    Optional<Category> findByTitle(String title);

    Category getCategoryById(Long id);

    List<Category> getAllCategories();

    String deleteCategory(Long id);

    Category updateCategory(Category category);
}
