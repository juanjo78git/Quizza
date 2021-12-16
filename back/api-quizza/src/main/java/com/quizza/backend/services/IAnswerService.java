package com.quizza.backend.services;

import org.springframework.http.ResponseEntity;

import com.quizza.backend.models.Answer;
import com.quizza.backend.responses.AnswerResponseRest;

/**
 * @author juanjo78git
 *
 */
public interface IAnswerService {

	/**
	 * @return AnswerResponseRest
	 */
	public ResponseEntity<AnswerResponseRest> listAll();
	
	/**
	 * @param answer Answer
	 * @return AnswerResponseRest
	 */
	public ResponseEntity<AnswerResponseRest> create(Answer answer);

	/**
	 * @param id Id
	 * @return AnswerResponseRest
	 */
	public ResponseEntity<AnswerResponseRest> findById(Long id);
	
	/**
	 * @param answer Answer
	 * @param id Id
	 * @return AnswerResponseRest
	 */
	public ResponseEntity<AnswerResponseRest> update(Answer answer, Long id);
	
	/**
	 * @param id Id
	 * @return AnswerResponseRest
	 */
	public ResponseEntity<AnswerResponseRest> delete(Long id);
}
