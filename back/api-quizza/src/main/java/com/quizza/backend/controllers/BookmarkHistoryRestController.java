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

import com.quizza.backend.models.BookmarkHistory;
import com.quizza.backend.responses.BookmarkHistoryResponseRest;
import com.quizza.backend.services.IBookmarkHistoryService;

/**
 * BookmarkHistory API Rest Controller
 * @author juanjo78git
 *
 */
@CrossOrigin(origins = {"http://localhost:4200","https://localhost:4200"})
@RestController
@RequestMapping("/v1")
public class BookmarkHistoryRestController {


	@Autowired
	private IBookmarkHistoryService service;
	
	/**
	 * List all BookmarkHistory
	 * @return BookmarkHistoryResponseRest
	 */
	@GetMapping("/bookmarkhistory")
	public ResponseEntity<BookmarkHistoryResponseRest> listAll() {
		ResponseEntity<BookmarkHistoryResponseRest> response = service.listAll();
		return response;
	}
	
	/**
	 * List BookmarkHistory find by id
	 * @param id Id
	 * @return BookmarkHistoryResponseRest
	 */
	@GetMapping("/bookmarkhistory/{id}")
	public ResponseEntity<BookmarkHistoryResponseRest> findById(@PathVariable Long id) {
		ResponseEntity<BookmarkHistoryResponseRest> response = service.findById(id);
		return response;
	}
	
	/**
	 * New BookmarkHistory
	 * @param request BookmarkHistory
	 * @return BookmarkHistoryResponseRest
	 */
	@PostMapping("/bookmarkhistory")
	public ResponseEntity<BookmarkHistoryResponseRest> create(@RequestBody BookmarkHistory request) {
		ResponseEntity<BookmarkHistoryResponseRest> response = service.create(request);
		return response;
	}
	
	/**
	 * Update BookmarkHistory
	 * @param request BookmarkHistory
	 * @param id Id
	 * @return BookmarkHistoryResponseRest
	 */
	@PutMapping("/bookmarkhistory/{id}")
	public ResponseEntity<BookmarkHistoryResponseRest> update(@RequestBody BookmarkHistory request, @PathVariable Long id) {
		ResponseEntity<BookmarkHistoryResponseRest> response = service.update(request, id);
		return response;
	}
	
	/**
	 * Delete BookmarkHistory
	 * @param id Id
	 * @return BookmarkHistoryResponseRest
	 */
	@DeleteMapping("/bookmarkhistory/{id}")
	public ResponseEntity<BookmarkHistoryResponseRest> delete(@PathVariable Long id) {
		ResponseEntity<BookmarkHistoryResponseRest> response = service.delete(id);
		return response;
	}
	
}
