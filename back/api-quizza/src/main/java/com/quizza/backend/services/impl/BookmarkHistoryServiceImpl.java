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

import com.quizza.backend.models.BookmarkHistory;
import com.quizza.backend.models.dao.IBookmarkHistoryDao;
import com.quizza.backend.responses.BookmarkHistoryResponseRest;
import com.quizza.backend.services.IBookmarkHistoryService;

/**
 * @author juanjo78git
 *
 */
@Service
public class BookmarkHistoryServiceImpl implements IBookmarkHistoryService{

	private static final Logger log = LoggerFactory.getLogger(BookmarkHistoryServiceImpl.class);
	
	@Autowired
	private IBookmarkHistoryDao bookmarkHistoryDao;
	
	@Override
	@Transactional(readOnly = true)
	public ResponseEntity<BookmarkHistoryResponseRest> listAll() {
		
		log.info("Init listAll()");
		BookmarkHistoryResponseRest response = new BookmarkHistoryResponseRest();
		
		try {
			List<BookmarkHistory> bookmarkHistory = (List<BookmarkHistory>) bookmarkHistoryDao.findAll();
			response.getBookmarkHistoryResponse().setBookmarkHistory(bookmarkHistory);
			response.setMetadata("OK", "0", "Perfect!");
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookmarkHistoryResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookmarkHistoryResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional
	public ResponseEntity<BookmarkHistoryResponseRest> create(BookmarkHistory bookmarkHistory) {
		
		log.info("Init create()");
		BookmarkHistoryResponseRest response = new BookmarkHistoryResponseRest();
		List<BookmarkHistory> list = new ArrayList<>();
		
		try {
			BookmarkHistory bookmarkHistorySaved = bookmarkHistoryDao.save(bookmarkHistory);
					
			if(bookmarkHistorySaved != null) {
				list.add(bookmarkHistorySaved);
				response.getBookmarkHistoryResponse().setBookmarkHistory(list);
				response.setMetadata("OK", "0", "Perfect!");
			} else {
				log.error("Error");
				response.setMetadata("KO", "-1", "Error");
				return new ResponseEntity<BookmarkHistoryResponseRest>(response, HttpStatus.BAD_REQUEST);
			}
			
			
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookmarkHistoryResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookmarkHistoryResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional(readOnly = true)
	public ResponseEntity<BookmarkHistoryResponseRest> findById(Long id) {
		
		log.info("Init findById()");
		BookmarkHistoryResponseRest response = new BookmarkHistoryResponseRest();
		List<BookmarkHistory> list = new ArrayList<>();
		
		try {
			Optional<BookmarkHistory> bookmarkHistory = bookmarkHistoryDao.findById(id);
			if(bookmarkHistory.isPresent()) {
				list.add(bookmarkHistory.get());
				response.getBookmarkHistoryResponse().setBookmarkHistory(list);
				response.setMetadata("Respuesta ok", "00", "Perfect!");
			} else {
				log.error("Error:" + id) ;
				response.setMetadata("KO", "-1", "Not found" + id);
				return new ResponseEntity<BookmarkHistoryResponseRest>(response, HttpStatus.NOT_FOUND); //404
			}
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookmarkHistoryResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookmarkHistoryResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional
	public ResponseEntity<BookmarkHistoryResponseRest> update(BookmarkHistory bookmarkHistory, Long id) {
		
		log.info("Init update()");
		BookmarkHistoryResponseRest response = new BookmarkHistoryResponseRest();
		List<BookmarkHistory> list = new ArrayList<>();
		
		try {
			Optional<BookmarkHistory> bookmarkHistoryFound = bookmarkHistoryDao.findById(id);
					
			if(bookmarkHistoryFound.isPresent()) {
				//TODO: Añadir campos de bookmarkHistory
				bookmarkHistoryFound.get().setId(bookmarkHistory.getId());
				BookmarkHistory bookmarkHistoryUpdated = bookmarkHistoryDao.save(bookmarkHistoryFound.get());
				
				if(bookmarkHistoryUpdated != null) {
					list.add(bookmarkHistoryUpdated);
					response.getBookmarkHistoryResponse().setBookmarkHistory(list);
					response.setMetadata("OK", "0", "Perfect!");
				} else {
					log.error("Error") ;
					response.setMetadata("KO", "-1", "Error");
					return new ResponseEntity<BookmarkHistoryResponseRest>(response, HttpStatus.BAD_REQUEST);
				}
			} else {
				log.error("Error not found") ;
				response.setMetadata("KO", "-1", "Error not found");
				return new ResponseEntity<BookmarkHistoryResponseRest>(response, HttpStatus.NOT_FOUND); //404
			}
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error: ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookmarkHistoryResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookmarkHistoryResponseRest>(response, HttpStatus.OK); //200
	}

	@Override
	@Transactional
	public ResponseEntity<BookmarkHistoryResponseRest> delete(Long id) {
		
		log.info("Init delete()");
		BookmarkHistoryResponseRest response = new BookmarkHistoryResponseRest();
		
		try {
			bookmarkHistoryDao.deleteById(id);
			response.setMetadata("OK", "0", "Perfect!");				
		} catch(Exception e) {
			response.setMetadata("KO", "-1", "Error");
			log.error("Error : ", e.getMessage());
			e.getStackTrace();
			return new ResponseEntity<BookmarkHistoryResponseRest>(response, HttpStatus.INTERNAL_SERVER_ERROR); //500
		}
		
		return new ResponseEntity<BookmarkHistoryResponseRest>(response, HttpStatus.OK); //200
	}

	
	
}
