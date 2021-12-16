package com.quizza.backend.services;

import org.springframework.http.ResponseEntity;

import com.quizza.backend.models.BookPageRedirect;
import com.quizza.backend.responses.BookPageRedirectResponseRest;

/**
 * @author juanjo78git
 *
 */
public interface IBookPageRedirectService {

	/**
	 * @return BookPageRedirect
	 */
	public ResponseEntity<BookPageRedirectResponseRest> listAll();
	
	/**
	 * @param bookPageRedirect BookPageRedirect
	 * @return BookPageRedirect
	 */
	public ResponseEntity<BookPageRedirectResponseRest> create(BookPageRedirect bookPageRedirect);

	/**
	 * @param id Id
	 * @return BookPageRedirect
	 */
	public ResponseEntity<BookPageRedirectResponseRest> findById(Long id);
	
	/**
	 * @param bookPageRedirect BookPageRedirect
	 * @param id Id
	 * @return BookPageRedirect
	 */
	public ResponseEntity<BookPageRedirectResponseRest> update(BookPageRedirect bookPageRedirect, Long id);
	
	/**
	 * @param id Id
	 * @return BookPageRedirect
	 */
	public ResponseEntity<BookPageRedirectResponseRest> delete(Long id);
}
