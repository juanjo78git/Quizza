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

import com.quizza.backend.models.Answer;
import com.quizza.backend.responses.AnswerResponseRest;
import com.quizza.backend.services.IAnswerService;

/**
 * Answer API Rest Controller
 * @author juanjo78git
 *
 */
@CrossOrigin(origins = {"http://localhost:4200","https://localhost:4200"})
@RestController
@RequestMapping("/v1")
public class AnswerRestController {


	@Autowired
	private IAnswerService service;
	
	/**
	 * List all answers
	 * @return AnswerResponseRest
	 */
	@GetMapping("/answer")
	public ResponseEntity<AnswerResponseRest> listAll() {
		ResponseEntity<AnswerResponseRest> response = service.listAll();
		return response;
	}
	
	/**
	 * List answer find by id
	 * @param id Id
	 * @return AnswerResponseRest
	 */
	@GetMapping("/answer/{id}")
	public ResponseEntity<AnswerResponseRest> findById(@PathVariable Long id) {
		ResponseEntity<AnswerResponseRest> response = service.findById(id);
		return response;
	}
	
	/**
	 * New answer
	 * @param request Id
	 * @return AnswerResponseRest
	 */
	@PostMapping("/answer")
	public ResponseEntity<AnswerResponseRest> create(@RequestBody Answer request) {
		ResponseEntity<AnswerResponseRest> response = service.create(request);
		return response;
	}
	
	/**
	 * Update answer
	 * @param request Answer
	 * @param id Id
	 * @return AnswerResponseRest
	 */
	@PutMapping("/answer/{id}")
	public ResponseEntity<AnswerResponseRest> update(@RequestBody Answer request, @PathVariable Long id) {
		ResponseEntity<AnswerResponseRest> response = service.update(request, id);
		return response;
	}
	
	/**
	 * Delete answer
	 * @param id Id
	 * @return AnswerResponseRest
	 */
	@DeleteMapping("/answer/{id}")
	public ResponseEntity<AnswerResponseRest> delete(@PathVariable Long id) {
		ResponseEntity<AnswerResponseRest> response = service.delete(id);
		return response;
	}
	
}