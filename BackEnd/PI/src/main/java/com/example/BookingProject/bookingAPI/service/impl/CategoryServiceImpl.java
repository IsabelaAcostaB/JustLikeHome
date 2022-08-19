package com.example.BookingProject.bookingAPI.service.impl;

import com.example.BookingProject.bookingAPI.exception.ResourceNotFoundException;
import com.example.BookingProject.bookingAPI.persistence.model.Category;
import com.example.BookingProject.bookingAPI.persistence.repository.CategoryRepository;

import com.example.BookingProject.bookingAPI.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;


@Service
@Transactional
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    @Override
    public Category saveCategory(Category category) throws Exception{

            return categoryRepository.save(category);
    }

    @Override
    public  List<Category> saveCategories(List<Category> categories) {
        return categoryRepository.saveAll(categories);
    }

    @Override
    public Category getCategoryByTitle(String title) {
        return categoryRepository.findByTitle(title);
    }

    @Override
    public List<Category> getAllCategories() {
        if(categoryRepository.findAll().size()>0){
            return categoryRepository.findAll();
        }
        return null;
    }

    @Override
    public String deleteCategory(Long id) throws Exception{
        if(categoryRepository.findById(id).isPresent()){
                categoryRepository.deleteById(id);
                return "Category with id:" + id + " has been successfully deleted";
        } else
                throw new ResourceNotFoundException("Category with id: " + id + " doesn't exist");

    }

    @Override
    public  Category updateCategory (Category category) {
        Optional<Category> categoryOptional = this.categoryRepository.findById(category.getId());
        if (categoryOptional.isPresent()) {
            Category existingCategory = categoryOptional.get();
            existingCategory.setId(category.getId());
            existingCategory.setTitle(category.getTitle());
            existingCategory.setDescription(category.getDescription());
            existingCategory.setImageURL(category.getImageURL());
            return categoryRepository.save(existingCategory);
        } else {
            throw new ResourceNotFoundException("Record not found with id: " + category.getId());
        }


    }

}

