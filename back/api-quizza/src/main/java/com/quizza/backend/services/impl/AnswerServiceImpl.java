package com.quizza.backend.services.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.quizza.backend.models.Answer;
import com.quizza.backend.models.dao.IAnswerDao;
import com.quizza.backend.responses.AnswerResponseRest;
import com.quizza.backend.services.IAnswerService;

/**
 * @author juanjo78git
 *
 */
@Service
public class AnswerServiceImpl implements IAnswerService{

	private static final Logger log = LoggerFactory.getLogger(AnswerServiceImpl.class);
	
	@Autowired
	private IAnswerDao answerDao;
	
	@Override
	@Transactional(readOnly = true)
	public ResponseEntity<AnswerResponseRest> listAll() {
		
		log.info("Init listAll()");
		AnswerResponseRest response = new AnswerResponseRest();
		
		try {
			List<Answer> answer = (List<Answer>) answerDao.findAll();
			response.getAnswerResponse().setAnswer(answer);
			response.setMetadata("OK", "0", "Perfect!");
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<AnswerResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<AnswerResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional
	public ResponseEntity<AnswerResponseRest> create(Answer answer) {
		
		log.info("Init create()");
		AnswerResponseRest response = new AnswerResponseRest();
		List<Answer> list = new ArrayList<>();
		
		try {
			Answer answerSaved = answerDao.save(answer);
					
			if(answerSaved != null) {
				list.add(answerSaved);
				response.getAnswerResponse().setAnswer(list);
				response.setMetadata("OK", "0", "Perfect!");
			} else {
				log.error("Error");
				response.setMetadata("KO", "-1", "Error");
				return new ResponseEntity<AnswerResponseRest>(response, HttpStatus.BAD_REQUEST);
			}
			
			
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<AnswerResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<AnswerResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional(readOnly = true)
	public ResponseEntity<AnswerResponseRest> findById(Long id) {
		
		log.info("Init findById()");
		AnswerResponseRest response = new AnswerResponseRest();
		List<Answer> list = new ArrayList<>();
		
		try {
			Optional<Answer> answer = answerDao.findById(id);
			if(answer.isPresent()) {
				list.add(answer.get());
				response.getAnswerResponse().setAnswer(list);
				response.setMetadata("Respuesta ok", "00", "Perfect!");
			} else {
				log.error("Error:" + id) ;
				response.setMetadata("KO", "-1", "Not found" + id);
				return new ResponseEntity<AnswerResponseRest>(response, HttpStatus.NOT_FOUND); //404
			}
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<AnswerResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<AnswerResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional
	public ResponseEntity<AnswerResponseRest> update(Answer answer, Long id) {
		
		log.info("Init update()");
		AnswerResponseRest response = new AnswerResponseRest();
		List<Answer> list = new ArrayList<>();
		
		try {
			Optional<Answer> answerFound = answerDao.findById(id);
					
			if(answerFound.isPresent()) {
				//TODO: Añadir campos de answer
				answerFound.get().setId(answer.getId());
				Answer answerUpdated = answerDao.save(answerFound.get());
				
				if(answerUpdated != null) {
					list.add(answerUpdated);
					response.getAnswerResponse().setAnswer(list);
					response.setMetadata("OK", "0", "Perfect!");
				} else {
					log.error("Error") ;
					response.setMetadata("KO", "-1", "Error");
					return new ResponseEntity<AnswerResponseRest>(response, HttpStatus.BAD_REQUEST);
				}
			} else {
				log.error("Error not found") ;
				response.setMetadata("KO", "-1", "Error not found");
				return new ResponseEntity<AnswerResponseRest>(response, HttpStatus.NOT_FOUND); //404
			}
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<AnswerResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<AnswerResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional
	public ResponseEntity<AnswerResponseRest> delete(Long id) {
		
		log.info("Init delete()");
		AnswerResponseRest response = new AnswerResponseRest();
		
		try {
			answerDao.deleteById(id);
			response.setMetadata("OK", "0", "Perfect!");				
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error : ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<AnswerResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<AnswerResponseRest>(response, HttpStatus.OK); //200
	}

}
