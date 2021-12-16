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

import com.quizza.backend.models.BookPageRedirect;
import com.quizza.backend.models.dao.IBookPageRedirectDao;
import com.quizza.backend.responses.BookPageRedirectResponseRest;
import com.quizza.backend.services.IBookPageRedirectService;

/**
 * @author juanjo78git
 *
 */
@Service
public class BookPageRedirectServiceImpl implements IBookPageRedirectService{

	private static final Logger log = LoggerFactory.getLogger(BookPageRedirectServiceImpl.class);
	
	@Autowired
	private IBookPageRedirectDao bookPageRedirectDao;
	
	@Override
	@Transactional(readOnly = true)
	public ResponseEntity<BookPageRedirectResponseRest> listAll() {
		
		log.info("Init listAll()");
		BookPageRedirectResponseRest response = new BookPageRedirectResponseRest();
		
		try {
			List<BookPageRedirect> bookPageRedirect = (List<BookPageRedirect>) bookPageRedirectDao.findAll();
			response.getBookPageRedirectResponse().setBookPageRedirect(bookPageRedirect);
			response.setMetadata("OK", "0", "Perfect!");
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookPageRedirectResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookPageRedirectResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional
	public ResponseEntity<BookPageRedirectResponseRest> create(BookPageRedirect bookPageRedirect) {
		
		log.info("Init create()");
		BookPageRedirectResponseRest response = new BookPageRedirectResponseRest();
		List<BookPageRedirect> list = new ArrayList<>();
		
		try {
			BookPageRedirect bookPageRedirectSaved = bookPageRedirectDao.save(bookPageRedirect);
					
			if(bookPageRedirectSaved != null) {
				list.add(bookPageRedirectSaved);
				response.getBookPageRedirectResponse().setBookPageRedirect(list);
				response.setMetadata("OK", "0", "Perfect!");
			} else {
				log.error("Error");
				response.setMetadata("KO", "-1", "Error");
				return new ResponseEntity<BookPageRedirectResponseRest>(response, HttpStatus.BAD_REQUEST);
			}
			
			
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookPageRedirectResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookPageRedirectResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional(readOnly = true)
	public ResponseEntity<BookPageRedirectResponseRest> findById(Long id) {
		
		log.info("Init findById()");
		BookPageRedirectResponseRest response = new BookPageRedirectResponseRest();
		List<BookPageRedirect> list = new ArrayList<>();
		
		try {
			Optional<BookPageRedirect> bookPageRedirect = bookPageRedirectDao.findById(id);
			if(bookPageRedirect.isPresent()) {
				list.add(bookPageRedirect.get());
				response.getBookPageRedirectResponse().setBookPageRedirect(list);
				response.setMetadata("Respuesta ok", "00", "Perfect!");
			} else {
				log.error("Error:" + id) ;
				response.setMetadata("KO", "-1", "Not found" + id);
				return new ResponseEntity<BookPageRedirectResponseRest>(response, HttpStatus.NOT_FOUND); //404
			}
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookPageRedirectResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookPageRedirectResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional
	public ResponseEntity<BookPageRedirectResponseRest> update(BookPageRedirect bookPageRedirect, Long id) {
		
		log.info("Init update()");
		BookPageRedirectResponseRest response = new BookPageRedirectResponseRest();
		List<BookPageRedirect> list = new ArrayList<>();
		
		try {
			Optional<BookPageRedirect> bookPageRedirectFound = bookPageRedirectDao.findById(id);
					
			if(bookPageRedirectFound.isPresent()) {
				//TODO: Añadir campos de bookPageRedirect
				bookPageRedirectFound.get().setId(bookPageRedirect.getId());
				BookPageRedirect bookPageRedirectUpdated = bookPageRedirectDao.save(bookPageRedirectFound.get());
				
				if(bookPageRedirectUpdated != null) {
					list.add(bookPageRedirectUpdated);
					response.getBookPageRedirectResponse().setBookPageRedirect(list);
					response.setMetadata("OK", "0", "Perfect!");
				} else {
					log.error("Error") ;
					response.setMetadata("KO", "-1", "Error");
					return new ResponseEntity<BookPageRedirectResponseRest>(response, HttpStatus.BAD_REQUEST);
				}
			} else {
				log.error("Error not found") ;
				response.setMetadata("KO", "-1", "Error not found");
				return new ResponseEntity<BookPageRedirectResponseRest>(response, HttpStatus.NOT_FOUND); //404
			}
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookPageRedirectResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookPageRedirectResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional
	public ResponseEntity<BookPageRedirectResponseRest> delete(Long id) {
		
		log.info("Init delete()");
		BookPageRedirectResponseRest response = new BookPageRedirectResponseRest();
		
		try {
			bookPageRedirectDao.deleteById(id);
			response.setMetadata("OK", "0", "Perfect!");				
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error : ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookPageRedirectResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookPageRedirectResponseRest>(response, HttpStatus.OK); //200
	}

	
	
}
