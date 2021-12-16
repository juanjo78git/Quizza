package com.quizza.backend.controllers;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.quizza.backend.models.Book;
import com.quizza.backend.responses.BookResponseRest;
import com.quizza.backend.services.IBookService;


/**
 * @author juanjo78git
 *
 */
public class BookRestControllerTest {

	
	@InjectMocks
	BookRestController bookController;

	// BookRestController Dependencies
	@Mock
	private IBookService service;
	
	/**
	 * Init test
	 */
	@BeforeEach
	public void init() {
		MockitoAnnotations.openMocks(this);
	}
	
	/**
	 * createTest with OK
	 */
	@Test
	@DisplayName("createTest with OK")
	public void createTest() {
		//Generate context
		MockHttpServletRequest request = new MockHttpServletRequest();
		RequestContextHolder.setRequestAttributes(new ServletRequestAttributes(request));
		
		Book book = new Book();
		
		when(service.create(any(Book.class))).thenReturn(new ResponseEntity<BookResponseRest>(HttpStatus.OK));
		
		ResponseEntity<BookResponseRest> respuesta = bookController.create(book);
		
		assertThat(respuesta.getStatusCodeValue()).isEqualTo(200);
	}
		
}
