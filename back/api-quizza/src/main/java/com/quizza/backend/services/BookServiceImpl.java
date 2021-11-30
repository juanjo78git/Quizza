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

import com.quizza.backend.models.Book;
import com.quizza.backend.models.dao.IBookDao;
import com.quizza.backend.responses.BookResponseRest;

@Service
public class BookServiceImpl implements IBookService{

	private static final Logger log = LoggerFactory.getLogger(BookServiceImpl.class);
	
	@Autowired
	private IBookDao bookDao;
	
	@Override
	@Transactional(readOnly = true)
	public ResponseEntity<BookResponseRest> listAll() {
		
		log.info("Init listAll()");
		BookResponseRest response = new BookResponseRest();
		
		try {
			List<Book> book = (List<Book>) bookDao.findAll();
			response.getBookResponse().setBook(book);
			response.setMetadata("OK", "0", "Perfect!");
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional
	public ResponseEntity<BookResponseRest> create(Book book) {
		
		log.info("Init create()");
		BookResponseRest response = new BookResponseRest();
		List<Book> list = new ArrayList<>();
		
		try {
			Book bookSaved = bookDao.save(book);
					
			if(bookSaved != null) {
				list.add(bookSaved);
				response.getBookResponse().setBook(list);
				response.setMetadata("OK", "0", "Perfect!");
			} else {
				log.error("Error");
				response.setMetadata("KO", "-1", "Error");
				return new ResponseEntity<BookResponseRest>(response, HttpStatus.BAD_REQUEST);
			}
			
			
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional(readOnly = true)
	public ResponseEntity<BookResponseRest> findById(Long id) {
		
		log.info("Init findById()");
		BookResponseRest response = new BookResponseRest();
		List<Book> list = new ArrayList<>();
		
		try {
			Optional<Book> book = bookDao.findById(id);
			if(book.isPresent()) {
				list.add(book.get());
				response.getBookResponse().setBook(list);
				response.setMetadata("Respuesta ok", "00", "Perfect!");
			} else {
				log.error("Error:" + id) ;
				response.setMetadata("KO", "-1", "Not found" + id);
				return new ResponseEntity<BookResponseRest>(response, HttpStatus.NOT_FOUND); //404
			}
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional
	public ResponseEntity<BookResponseRest> update(Book book, Long id) {
		
		log.info("Init update()");
		BookResponseRest response = new BookResponseRest();
		List<Book> list = new ArrayList<>();
		
		try {
			Optional<Book> bookFound = bookDao.findById(id);
					
			if(bookFound.isPresent()) {
				//TODO: Añadir campos de book
				bookFound.get().setId(book.getId());
				Book bookUpdated = bookDao.save(bookFound.get());
				
				if(bookUpdated != null) {
					list.add(bookUpdated);
					response.getBookResponse().setBook(list);
					response.setMetadata("OK", "0", "Perfect!");
				} else {
					log.error("Error") ;
					response.setMetadata("KO", "-1", "Error");
					return new ResponseEntity<BookResponseRest>(response, HttpStatus.BAD_REQUEST);
				}
			} else {
				log.error("Error not found") ;
				response.setMetadata("KO", "-1", "Error not found");
				return new ResponseEntity<BookResponseRest>(response, HttpStatus.NOT_FOUND); //404
			}
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional
	public ResponseEntity<BookResponseRest> delete(Long id) {
		
		log.info("Init delete()");
		BookResponseRest response = new BookResponseRest();
		
		try {
			bookDao.deleteById(id);
			response.setMetadata("OK", "0", "Perfect!");				
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error : ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookResponseRest>(response, HttpStatus.OK); //200
	}

	
	
}
