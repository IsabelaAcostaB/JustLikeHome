/*
package com.example.BookingProject;

import com.example.BookingProject.bookingAPI.persistence.model.Category;
import com.example.BookingProject.bookingAPI.persistence.model.Product;
import com.example.BookingProject.bookingAPI.service.impl.CategoryServiceImpl;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class CategoryControllerTest {

	@Autowired
	CategoryServiceImpl categoryServiceImpl;

	@Order(1)
	@Test
	void testSaveCategory() throws Exception {

		Set<Product> products = new HashSet<>();
		Category c = new Category(1l,products, "Casa", "Casa", "URL");
			categoryServiceImpl.saveCategory(c);

		assertNotNull(categoryServiceImpl.getCategoryByTitle("Casa"));
	}

	@Test
	void testSaveCategories() {
		List<Category> categories = new ArrayList<>();
		*/
/*categories.add(new Category(2L, "", "", ""));
		categories.add(new Category(3l,"","",""));*//*

		categoryServiceImpl.saveCategories(categories);

		assertTrue(categoryServiceImpl.getAllCategories().size() > 0);
	}//*

	@Order(2)
	@Test
	void testGetCategoryByTitle() throws Exception {


		Set<Product> products2 = new HashSet<>();
		Category c = new Category(2l, products2,"Casa2", "", "");
		categoryServiceImpl.saveCategory(c);
		assertTrue(categoryServiceImpl.getCategoryByTitle("Casa2") != null);
	}

	@Order(3)
	@Test
	void testGetAllCategories() {
		List<Category> listOfCategories = categoryServiceImpl.getAllCategories();
		Category c1= new Category();
		Category c2 = new Category();
		listOfCategories.add(c1);
		listOfCategories.add(c2);

		assertTrue(categoryServiceImpl.getAllCategories() != null);
	}

	@Order(4)
	@Test
	void testUpdateCategory() {
		Category cUpdated = categoryServiceImpl.getCategoryByTitle("Casa");
		cUpdated.setImageURL("URL");
		categoryServiceImpl.updateCategory(cUpdated);
		assertTrue(categoryServiceImpl.getCategoryByTitle("Casa").getImageURL() == "URL");
	}

	@Order(5)
	@Test
	void testDeleteCategory() throws Exception {
		categoryServiceImpl.deleteCategory(1l);
		assertNull(categoryServiceImpl.getCategoryByTitle("Casa"));
	}
}
*/
