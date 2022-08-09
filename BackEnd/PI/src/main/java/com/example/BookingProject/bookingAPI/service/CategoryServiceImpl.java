package com.example.BookingProject.bookingAPI.service;

import com.example.BookingProject.bookingAPI.persistence.model.Category;
import com.example.BookingProject.bookingAPI.persistence.repository.CategoryRepository;

import com.example.BookingProject.bookingAPI.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    private final CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    @Override
    public Category saveCategory(Category category) {
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
    public String deleteCategory(Long id) {
        if(categoryRepository.findById(id).isPresent()){
            categoryRepository.deleteById(id);
            return "Category with id:" + id + " has been succesfully deleted";
        }
        return "Category with id:" + id + " doesn`t exist";
    };

    @Override
    public  Category updateCategory (Category category) {
        Long id = category.getId();

        if (categoryRepository.findById(id).isPresent()) {
            Category existingCategory = categoryRepository.findById(category.getId()).orElse(null);
            existingCategory.setTitle(category.getTitle());
            existingCategory.setDescription(category.getDescription());
            existingCategory.setImageURL(category.getImageURL());
            return categoryRepository.save(existingCategory);
        }
        return null;
    }

}

