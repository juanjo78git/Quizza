package com.quizza.backend.services;

import org.springframework.http.ResponseEntity;

import com.quizza.backend.models.BookPage;
import com.quizza.backend.responses.BookPageResponseRest;

/**
 * @author juanjo78git
 *
 */
public interface IBookPageService {

	/**
	 * @return BookPage
	 */
	public ResponseEntity<BookPageResponseRest> listAll();
	
	/**
	 * @param bookPage BookPage
	 * @return BookPage
	 */
	public ResponseEntity<BookPageResponseRest> create(BookPage bookPage);

	/**
	 * @param id Id
	 * @return BookPage
	 */
	public ResponseEntity<BookPageResponseRest> findById(Long id);
	
	/**
	 * @param bookPage BookPage
	 * @param id Id
	 * @return BookPage
	 */
	public ResponseEntity<BookPageResponseRest> update(BookPage bookPage, Long id);
	
	/**
	 * @param id Id
	 * @return BookPage
	 */
	public ResponseEntity<BookPageResponseRest> delete(Long id);
}
