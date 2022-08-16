package com.example.BookingProject.bookingAPI.service;

import com.example.BookingProject.bookingAPI.persistence.model.Category;


import java.util.List;


public interface CategoryService {
    Category saveCategory(Category category) throws Exception;

    List<Category> saveCategories(List<Category> categories);

    Category getCategoryByTitle(String title);

    List<Category> getAllCategories();

    String deleteCategory(Long id) throws Exception;

    Category updateCategory(Category category);
}
