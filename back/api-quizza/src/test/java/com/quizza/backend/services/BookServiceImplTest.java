package com.quizza.backend.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import com.quizza.backend.models.Book;
import com.quizza.backend.models.dao.IBookDao;
import com.quizza.backend.responses.BookResponseRest;
import com.quizza.backend.services.impl.BookServiceImpl;


/**
 * @author juanjo78git
 *
 */
public class BookServiceImplTest {

	@InjectMocks
	BookServiceImpl service;
	
	// BookServiceImpl Dependencies
	@Mock
	IBookDao bookDao;  
	
	List<Book> list = new ArrayList<Book>(); 
	
	/**
	 * Init test
	 */
	@BeforeEach
	public void init() {
		MockitoAnnotations.openMocks(this);
		loadBooks();
	}
	
	/**
	 * Load 4 Books
	 */
	public void loadBooks() {
		Book book1 = new Book();
		Book book2 = new Book();
		Book book3 = new Book();
		Book book4 = new Book();
		list.add(book1);
		list.add(book2);
		list.add(book3);
		list.add(book4);
	}
	
	/**
	 * listAllBooksTest count
	 */
	@Test
	@DisplayName("listAllBooksTest count")
	public void listAllBooksTest() {

		when(bookDao.findAll()).thenReturn(list);
		
		ResponseEntity<BookResponseRest> response = service.listAll();
		
		assertEquals(4, response.getBody().getBookResponse().getBook().size());
		
		verify(bookDao, times(1)).findAll();
	}
	
}
