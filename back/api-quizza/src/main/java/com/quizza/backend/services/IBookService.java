package com.quizza.backend.services;

import org.springframework.http.ResponseEntity;

import com.quizza.backend.models.Book;
import com.quizza.backend.responses.BookResponseRest;

/**
 * @author juanjo78git
 *
 */
public interface IBookService {
	/**
	 * @return Book
	 */
	public ResponseEntity<BookResponseRest> listAll();
	
	/**
	 * @param book Book
	 * @return Book
	 */
	public ResponseEntity<BookResponseRest> create(Book book);

	/**
	 * @param id Id
	 * @return Book
	 */
	public ResponseEntity<BookResponseRest> findById(Long id);
	
	/**
	 * @param book Book
	 * @param id Id
	 * @return Book
	 */
	public ResponseEntity<BookResponseRest> update(Book book, Long id);
	
	/**
	 * @param id Id
	 * @return Book
	 */
	public ResponseEntity<BookResponseRest> delete(Long id);
}
