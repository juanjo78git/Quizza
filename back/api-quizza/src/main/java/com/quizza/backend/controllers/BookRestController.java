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

@CrossOrigin(origins = {"http://localhost:4200","https://localhost:4200"})
@RestController
@RequestMapping("/v1")
public class BookRestController {


	@Autowired
	private IBookService service;
	
	@GetMapping("/bookcase")
	public ResponseEntity<BookResponseRest> listAll() {
		ResponseEntity<BookResponseRest> response = service.listAll();
		return response;
	}
	
	@GetMapping("/book/{id}")
	public ResponseEntity<BookResponseRest> findById(@PathVariable Long id) {
		ResponseEntity<BookResponseRest> response = service.findById(id);
		return response;
	}
	
	@PostMapping("/book")
	public ResponseEntity<BookResponseRest> create(@RequestBody Book request) {
		ResponseEntity<BookResponseRest> response = service.create(request);
		return response;
	}
	
	@PutMapping("/book/{id}")
	public ResponseEntity<BookResponseRest> update(@RequestBody Book request, @PathVariable Long id) {
		ResponseEntity<BookResponseRest> response = service.update(request, id);
		return response;
	}
	
	@DeleteMapping("/book/{id}")
	public ResponseEntity<BookResponseRest> delete(@PathVariable Long id) {
		ResponseEntity<BookResponseRest> response = service.delete(id);
		return response;
	}
	
}
