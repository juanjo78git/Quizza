package com.quizza.backend.services;

import org.springframework.http.ResponseEntity;

import com.quizza.backend.models.Answer;
import com.quizza.backend.responses.AnswerResponseRest;

public interface IAnswerService {

	public ResponseEntity<AnswerResponseRest> listAll();
	
	public ResponseEntity<AnswerResponseRest> create(Answer answer);

	public ResponseEntity<AnswerResponseRest> findById(Long id);
	
	public ResponseEntity<AnswerResponseRest> update(Answer answer, Long id);
	
	public ResponseEntity<AnswerResponseRest> delete(Long id);
}
