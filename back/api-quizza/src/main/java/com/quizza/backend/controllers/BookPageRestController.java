package com.quizza.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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

@RestController
@RequestMapping("/v1")
public class BookPageRestController {


	@Autowired
	private IBookPageService service;
	
	@GetMapping("/bookpage")
	public ResponseEntity<BookPageResponseRest> listAll() {
		ResponseEntity<BookPageResponseRest> response = service.listAll();
		return response;
	}
	
	@GetMapping("/bookpage/{id}")
	public ResponseEntity<BookPageResponseRest> findById(@PathVariable Long id) {
		ResponseEntity<BookPageResponseRest> response = service.findById(id);
		return response;
	}
	
	@PostMapping("/bookpage")
	public ResponseEntity<BookPageResponseRest> create(@RequestBody BookPage request) {
		ResponseEntity<BookPageResponseRest> response = service.create(request);
		return response;
	}
	
	@PutMapping("/bookpage/{id}")
	public ResponseEntity<BookPageResponseRest> update(@RequestBody BookPage request, @PathVariable Long id) {
		ResponseEntity<BookPageResponseRest> response = service.update(request, id);
		return response;
	}
	
	@DeleteMapping("/bookpage/{id}")
	public ResponseEntity<BookPageResponseRest> delete(@PathVariable Long id) {
		ResponseEntity<BookPageResponseRest> response = service.delete(id);
		return response;
	}
	
}
