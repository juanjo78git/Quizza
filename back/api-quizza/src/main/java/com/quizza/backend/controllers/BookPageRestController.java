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

import com.quizza.backend.models.BookPage;
import com.quizza.backend.responses.BookPageResponseRest;
import com.quizza.backend.services.IBookPageService;

/**
 * BookPage API Rest Controller
 * @author juanjo78git
 *
 */
@CrossOrigin(origins = {"http://localhost:4200","https://localhost:4200"})
@RestController
@RequestMapping("/v1")
public class BookPageRestController {


	@Autowired
	private IBookPageService service;
	
	/**
	 * List all BookPage
	 * @return BookPageResponseRest
	 */
	@GetMapping("/bookpage")
	public ResponseEntity<BookPageResponseRest> listAll() {
		ResponseEntity<BookPageResponseRest> response = service.listAll();
		return response;
	}
	
	/**
	 * List BookPage find by id
	 * @param id Id
	 * @return BookPageResponseRest
	 */
	@GetMapping("/bookpage/{id}")
	public ResponseEntity<BookPageResponseRest> findById(@PathVariable Long id) {
		ResponseEntity<BookPageResponseRest> response = service.findById(id);
		return response;
	}
	
	/**
	 * New BookPage
	 * @param request BookPage
	 * @return BookPageResponseRest
	 */
	@PostMapping("/bookpage")
	public ResponseEntity<BookPageResponseRest> create(@RequestBody BookPage request) {
		ResponseEntity<BookPageResponseRest> response = service.create(request);
		return response;
	}
	
	/**
	 * Update BookPage
	 * @param request BookPage
	 * @param id Id
	 * @return BookPageResponseRest
	 */
	@PutMapping("/bookpage/{id}")
	public ResponseEntity<BookPageResponseRest> update(@RequestBody BookPage request, @PathVariable Long id) {
		ResponseEntity<BookPageResponseRest> response = service.update(request, id);
		return response;
	}
	
	/**
	 * Delete BookPage
	 * @param id Id
	 * @return BookPageResponseRest
	 */
	@DeleteMapping("/bookpage/{id}")
	public ResponseEntity<BookPageResponseRest> delete(@PathVariable Long id) {
		ResponseEntity<BookPageResponseRest> response = service.delete(id);
		return response;
	}
	
}
