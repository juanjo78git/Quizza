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

import com.quizza.backend.models.BookPageRedirect;
import com.quizza.backend.responses.BookPageRedirectResponseRest;
import com.quizza.backend.services.IBookPageRedirectService;

/**
 * BookPageRedirect API Rest Controller
 * @author juanjo78git
 *
 */
@CrossOrigin(origins = {"http://localhost:4200","https://localhost:4200"})
@RestController
@RequestMapping("/v1")
public class BookPageRedirectRestController {


	@Autowired
	private IBookPageRedirectService service;
	
	/**
	 * List all BookPageRedirect
	 * @return BookPageRedirectResponseRest
	 */
	@GetMapping("/bookpageredirect")
	public ResponseEntity<BookPageRedirectResponseRest> listAll() {
		ResponseEntity<BookPageRedirectResponseRest> response = service.listAll();
		return response;
	}
	
	/**
	 * List BookPageRedirect find by id
	 * @param id Id
	 * @return BookPageRedirectResponseRest
	 */
	@GetMapping("/bookpageredirect/{id}")
	public ResponseEntity<BookPageRedirectResponseRest> findById(@PathVariable Long id) {
		ResponseEntity<BookPageRedirectResponseRest> response = service.findById(id);
		return response;
	}
	
	/**
	 * New BookPageRedirect
	 * @param request BookPageRedirect
	 * @return BookPageRedirectResponseRest
	 */
	@PostMapping("/bookpageredirect")
	public ResponseEntity<BookPageRedirectResponseRest> create(@RequestBody BookPageRedirect request) {
		ResponseEntity<BookPageRedirectResponseRest> response = service.create(request);
		return response;
	}
	
	/**
	 * Update BookPageRedirect
	 * @param request BookPageRedirect
	 * @param id Id
	 * @return BookPageRedirectResponseRest
	 */
	@PutMapping("/bookpageredirect/{id}")
	public ResponseEntity<BookPageRedirectResponseRest> update(@RequestBody BookPageRedirect request, @PathVariable Long id) {
		ResponseEntity<BookPageRedirectResponseRest> response = service.update(request, id);
		return response;
	}
	
	/**
	 * Delete BookPageRedirect
	 * @param id Id
	 * @return BookPageRedirect
	 */
	@DeleteMapping("/bookpageredirect/{id}")
	public ResponseEntity<BookPageRedirectResponseRest> delete(@PathVariable Long id) {
		ResponseEntity<BookPageRedirectResponseRest> response = service.delete(id);
		return response;
	}
	
}
