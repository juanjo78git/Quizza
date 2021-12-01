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

import com.quizza.backend.models.BookmarkHistory;
import com.quizza.backend.responses.BookmarkHistoryResponseRest;
import com.quizza.backend.services.IBookmarkHistoryService;

@RestController
@RequestMapping("/v1")
public class BookmarkHistoryRestController {


	@Autowired
	private IBookmarkHistoryService service;
	
	@GetMapping("/bookmarkhistory")
	public ResponseEntity<BookmarkHistoryResponseRest> listAll() {
		ResponseEntity<BookmarkHistoryResponseRest> response = service.listAll();
		return response;
	}
	
	@GetMapping("/bookmarkhistory/{id}")
	public ResponseEntity<BookmarkHistoryResponseRest> findById(@PathVariable Long id) {
		ResponseEntity<BookmarkHistoryResponseRest> response = service.findById(id);
		return response;
	}
	
	@PostMapping("/bookmarkhistory")
	public ResponseEntity<BookmarkHistoryResponseRest> create(@RequestBody BookmarkHistory request) {
		ResponseEntity<BookmarkHistoryResponseRest> response = service.create(request);
		return response;
	}
	
	@PutMapping("/bookmarkhistory/{id}")
	public ResponseEntity<BookmarkHistoryResponseRest> update(@RequestBody BookmarkHistory request, @PathVariable Long id) {
		ResponseEntity<BookmarkHistoryResponseRest> response = service.update(request, id);
		return response;
	}
	
	@DeleteMapping("/bookmarkhistory/{id}")
	public ResponseEntity<BookmarkHistoryResponseRest> delete(@PathVariable Long id) {
		ResponseEntity<BookmarkHistoryResponseRest> response = service.delete(id);
		return response;
	}
	
}
