package com.quizza.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quizza.backend.models.Book;
import com.quizza.backend.responses.BookResponseRest;
import com.quizza.backend.services.IBookService;

/**
 * Book API Rest Controller
 * @author juanjo78git
 *
 */
@CrossOrigin(origins = {"http://localhost:4200","https://localhost:4200"})
@RestController
@RequestMapping("/v1")
public class BookRestController {


	@Autowired
	private IBookService service;
	
	/**
	 * List all Book
	 * @return BookResponseRest
	 */
	@GetMapping("/bookcase")
	public ResponseEntity<BookResponseRest> listAll() {
		ResponseEntity<BookResponseRest> response = service.listAll();
		return response;
	}
	
	/**
	 * List Book find by id
	 * @param id Id
	 * @return BookResponseRest
	 */
	@GetMapping("/book/{id}")
	public ResponseEntity<BookResponseRest> findById(@PathVariable Long id) {
		ResponseEntity<BookResponseRest> response = service.findById(id);
		return response;
	}
	
	/**
	 * New Book
	 * @param request Book
	 * @return BookResponseRest
	 */
	@PostMapping("/book")
	public ResponseEntity<BookResponseRest> create(@RequestBody Book request) {
		ResponseEntity<BookResponseRest> response = service.create(request);
		return response;
	}
	
	/**
	 * Update Book
	 * @param request Book
	 * @param id Id
	 * @return BookResponseRest
	 */
	@PutMapping("/book/{id}")
	public ResponseEntity<BookResponseRest> update(@RequestBody Book request, @PathVariable Long id) {
		ResponseEntity<BookResponseRest> response = service.update(request, id);
		return response;
	}
	
	/**
	 * Delete Book
	 * @param id Id
	 * @return BookResponseRest
	 */
	@DeleteMapping("/book/{id}")
	public ResponseEntity<BookResponseRest> delete(@PathVariable Long id) {
		ResponseEntity<BookResponseRest> response = service.delete(id);
		return response;
	}
	
}
