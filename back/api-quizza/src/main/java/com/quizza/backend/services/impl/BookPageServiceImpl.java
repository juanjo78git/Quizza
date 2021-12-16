package com.quizza.backend.services;

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

import com.quizza.backend.models.BookPage;
import com.quizza.backend.models.dao.IBookPageDao;
import com.quizza.backend.responses.BookPageResponseRest;

@Service
public class BookPageServiceImpl implements IBookPageService{

	private static final Logger log = LoggerFactory.getLogger(BookPageServiceImpl.class);
	
	@Autowired
	private IBookPageDao bookPageDao;
	
	@Override
	@Transactional(readOnly = true)
	public ResponseEntity<BookPageResponseRest> listAll() {
		
		log.info("Init listAll()");
		BookPageResponseRest response = new BookPageResponseRest();
		
		try {
			List<BookPage> bookPage = (List<BookPage>) bookPageDao.findAll();
			response.getBookPageResponse().setBookPage(bookPage);
			response.setMetadata("OK", "0", "Perfect!");
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookPageResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookPageResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional
	public ResponseEntity<BookPageResponseRest> create(BookPage bookPage) {
		
		log.info("Init create()");
		BookPageResponseRest response = new BookPageResponseRest();
		List<BookPage> list = new ArrayList<>();
		
		try {
			BookPage bookPageSaved = bookPageDao.save(bookPage);
					
			if(bookPageSaved != null) {
				list.add(bookPageSaved);
				response.getBookPageResponse().setBookPage(list);
				response.setMetadata("OK", "0", "Perfect!");
			} else {
				log.error("Error");
				response.setMetadata("KO", "-1", "Error");
				return new ResponseEntity<BookPageResponseRest>(response, HttpStatus.BAD_REQUEST);
			}
			
			
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookPageResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookPageResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional(readOnly = true)
	public ResponseEntity<BookPageResponseRest> findById(Long id) {
		
		log.info("Init findById()");
		BookPageResponseRest response = new BookPageResponseRest();
		List<BookPage> list = new ArrayList<>();
		
		try {
			Optional<BookPage> bookPage = bookPageDao.findById(id);
			if(bookPage.isPresent()) {
				list.add(bookPage.get());
				response.getBookPageResponse().setBookPage(list);
				response.setMetadata("Respuesta ok", "00", "Perfect!");
			} else {
				log.error("Error:" + id) ;
				response.setMetadata("KO", "-1", "Not found" + id);
				return new ResponseEntity<BookPageResponseRest>(response, HttpStatus.NOT_FOUND); //404
			}
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookPageResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookPageResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional
	public ResponseEntity<BookPageResponseRest> update(BookPage bookPage, Long id) {
		
		log.info("Init update()");
		BookPageResponseRest response = new BookPageResponseRest();
		List<BookPage> list = new ArrayList<>();
		
		try {
			Optional<BookPage> bookPageFound = bookPageDao.findById(id);
					
			if(bookPageFound.isPresent()) {
				//TODO: Añadir campos de bookPage
				bookPageFound.get().setId(bookPage.getId());
				BookPage bookPageUpdated = bookPageDao.save(bookPageFound.get());
				
				if(bookPageUpdated != null) {
					list.add(bookPageUpdated);
					response.getBookPageResponse().setBookPage(list);
					response.setMetadata("OK", "0", "Perfect!");
				} else {
					log.error("Error") ;
					response.setMetadata("KO", "-1", "Error");
					return new ResponseEntity<BookPageResponseRest>(response, HttpStatus.BAD_REQUEST);
				}
			} else {
				log.error("Error not found") ;
				response.setMetadata("KO", "-1", "Error not found");
				return new ResponseEntity<BookPageResponseRest>(response, HttpStatus.NOT_FOUND); //404
			}
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookPageResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookPageResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional
	public ResponseEntity<BookPageResponseRest> delete(Long id) {
		
		log.info("Init delete()");
		BookPageResponseRest response = new BookPageResponseRest();
		
		try {
			bookPageDao.deleteById(id);
			response.setMetadata("OK", "0", "Perfect!");				
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error : ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookPageResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookPageResponseRest>(response, HttpStatus.OK); //200
	}

	
	
}
